/*
This should really be a singleton class rather than functionally called
 */
export default (handleErrVars) => {
    console.error(handleErrVars.message);
    handleErrVars.res.status(handleErrVars.code).send(handleErrVars.message);
    throw new Error(handleErrVars.message);
};