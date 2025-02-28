const URL = 'http://127.0.0.1:3000/lpd';

export default {

  getImportantDates: (lpd) => {

    const lastPeriod = new Date(lpd);

    const dueDate = new Date(lpd);
    dueDate.setDate(lastPeriod.getDate() + 7 * 40);
    const today = new Date();
    let weeks = (today - lastPeriod) / (1000 * 60 * 60 * 24 * 7);
    const days = Math.floor(weeks % 7);
    weeks = Math.floor(weeks);
    console.log(typeof dueDate, dueDate);

    return { days, weeks, dueDate };
  },

  http: {

    getLpd: async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('error');
        const lpd = response.json();
        return lpd;
      } catch (error) {

      }
    }
  }
} 
