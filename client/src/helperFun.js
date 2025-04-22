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

export function getDueDate(lpd) {
  const dueDate = new Date(lpd);
  dueDate.setDate(dueDate.getDate() + 7 * 40);
  return dueDate;
}

export function getTotalDays(from, to) {
  const days = (to - from) / (1000 * 60 * 60 * 24);
  return Math.floor(days);
}

function getImportantDates(lpd) {

  const dueDate = getDueDate(lpd);
  const lastPeriod = new Date(lpd);

  const today = new Date();
  const totalDays = getTotalDays(lastPeriod, today);
  const weeks = Math.floor((totalDays / 7));
  const days = Math.floor(totalDays % 7);

  return { days, weeks, dueDate };
}

async function getLpd() {
  try {
    const lpd = await fetchFactory(URL + 'lpd');
    return lpd;
  } catch (error) {
    return { lpd: undefined };
  }
}

async function setLpd(lpd) {
  try {
    const response = await fetchFactory(URL + 'lpd', lpd);
  } catch (error) {
    console.log(error);
  }
}

async function getEvents() {
  try {
    const events = await fetchFactory(URL + 'event');
    return events;
  } catch (error) {
    console.log(error);
  }
}

async function setEvent(event) {
  try {
    const response = await fetchFactory(URL + 'event', event);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function deleteEvent(id) {
  try {
    const response = await fetch(`${URL}event/${id}`, { method: "DELETE" }).then(resp => resp.json()).then(data => console.log(data));

  } catch (error) {
    console.log(error);
  }
}

export default { getImportantDates, http: { getLpd, setLpd, getEvents, setEvent, deleteEvent } }