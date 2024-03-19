const apiRequest = async (url = "", optionsObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("Please reload the app"); // state of the app may not be in sync with the server
  } catch(err) {
    errMsg = err.message;
  } finally {
    return errMsg;
  }
}

export default apiRequest;