export async function sendBatchUpdate(formData) {
    const { generalInfo = {}, education = {}, experiences = [] } = formData;

    const safeReplace = (text, value) => 
        value ? [{ replaceAllText: { containsText: { text, matchCase: true }, replaceText: value } }] : [];

    const requests = [
        ...safeReplace('{{email}}', generalInfo.email),
        ...safeReplace('{{firstName}}', generalInfo.firstName),
        ...safeReplace('{{middleName}}', generalInfo.middleName),
        ...safeReplace('{{lastName}}', generalInfo.lastName),
        ...safeReplace('{{schoolName}}', education.schoolName),
        ...safeReplace('{{titleOfStudy}}', education.titleOfStudy),
        ...safeReplace('{{dateOfStudy}}', education.dateOfStudy),
        ...experiences.flatMap((experience, index) => [
            ...safeReplace(`{{companyName${index}}}`, experience.companyName),
            ...safeReplace(`{{positionTitle${index}}}`, experience.positionTitle),
            ...safeReplace(`{{description${index}}}`, experience.description)
        ])
    ];

    if (requests.length === 0) {
        console.warn('No valid data provided for update.');
        return;
    }

    try {
        const response = await gapi.client.docs.documents.batchUpdate({
            documentId: '', // Replace with your document ID
            requests
        });
        console.log('Document updated successfully:', response);
    } catch (error) {
        console.error('Error updating document:', error);
    }
}
