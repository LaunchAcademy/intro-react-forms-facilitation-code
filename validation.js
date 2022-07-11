const validForSubmission = () => {
    let submitErrors
    const requiredFields = ["name", "description"]

    requiredFields.forEach(field => {
        if (itemObject[field].trim() === ""){
            submitErrors = {
                ...submitErrors,
                [field]: "is blank"
            }
        }
    })
    setErrors(submitErrors)
    return _.isEmpty(submitErrors)
}