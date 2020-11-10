export default (handleErrParams) => {
    console.error(handleErrParams.message);
    handleErrParams.res.status(handleErrParams.code).send(handleErrParams.message);
    throw new Error(handleErrParams.message);
};