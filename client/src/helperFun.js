const URL = 'http://127.0.0.1:3000/';

/**
 * 
 * @param {String} url the url for the request
 * @param {*} [body]  if truthy it will fetch a post request if not it will be a GET
 * @returns 
 */

async function fetchFactory(url, body) {

  if (body) Object.assign(body, { method: 'Post', body: JSON.stringify(body), headers: { "Content-Type": "application/json" } });

  const response = body ? await fetch(url, body) : await fetch(url);
  if (!response.ok || response.status === 204) throw new Error('no response');
  const lpd = response.json();
  return lpd;
}

export default {

  getImportantDates: (lpd) => {

    const lastPeriod = new Date(lpd);

    const dueDate = new Date(lpd);
    dueDate.setDate(lastPeriod.getDate() + 7 * 40);
    const today = new Date();
    let days = (today - lastPeriod) / (1000 * 60 * 60 * 24);
    const weeks = Math.floor((days / 7));
    days = Math.floor(days % 7);


    return { days, weeks, dueDate };
  },

  http: {

    getLpd: async () => {
      try {
        const lpd = await fetchFactory(URL + 'lpd');
        return lpd;
      } catch (error) {
        return { lpd: undefined };
      }
    },

    setLpd: async (lpd) => {
      try {
        const response = await fetchFactory(URL + 'lpd', lpd);
      } catch (error) {
        console.log(error);
      }
    },

    getEvents: async () => {
      try {
        const events = await fetchFactory(URL + 'event');
        return events;
      } catch (error) {
        console.log(error);
      }
    },

    setEvent: async (event) => {
      try {
        const response = await fetchFactory(URL + 'event', event);
        return response;
      } catch (error) {
        console.log(error);
      }
    },
    deleteEvent: async (id) => {
      try {
        const response = await fetch(`${URL}event/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(data => console.log(data));

      } catch (error) {
        console.log(error);
      }
    }
  }
} 
