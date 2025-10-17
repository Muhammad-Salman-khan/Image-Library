const fetcher = async (url) => {
  try {
    const data = await fetch(url);
    if (!data.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return data.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default fetcher;
