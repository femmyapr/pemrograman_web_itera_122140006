// Class untuk data jadwal
class Schedule {
    constructor(id, course, time) {
      this.id = id;
      this.course = course;
      this.time = time;
    }
  }
  
  // Ambil elemen DOM
  const form = document.getElementById('schedule-form');
  const courseInput = document.getElementById('course-input');
  const timeInput = document.getElementById('time-input');
  const list = document.getElementById('schedule-list');
  
  // Simpan dan ambil data dari localStorage
  const getSchedules = () => JSON.parse(localStorage.getItem('schedules')) || [];
  
  const saveSchedules = (schedules) => {
    localStorage.setItem('schedules', JSON.stringify(schedules));
  };
  
  // Render list
  const renderSchedules = () => {
    const schedules = getSchedules();
    list.innerHTML = '';
  
    schedules.forEach(schedule => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${schedule.course} - ${schedule.time}</span>
        <div class="actions">
          <button onclick="editSchedule('${schedule.id}')">Edit</button>
          <button onclick="deleteSchedule('${schedule.id}')">Hapus</button>
        </div>
      `;
      list.appendChild(li);
    });
  };
  
  // Tambah jadwal
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const course = courseInput.value.trim();
    const time = timeInput.value.trim();
  
    if (!course || !time) return;
  
    const newSchedule = new Schedule(Date.now().toString(), course, time);
    const schedules = getSchedules();
    schedules.push(newSchedule);
  
    await saveAndRender(schedules);
    form.reset();
  });
  
  // Arrow function: hapus jadwal
  const deleteSchedule = async (id) => {
    const schedules = getSchedules().filter(sch => sch.id !== id);
    await saveAndRender(schedules);
  };
  
  // Arrow function: edit jadwal
  const editSchedule = (id) => {
    const schedules = getSchedules();
    const schedule = schedules.find(sch => sch.id === id);
    if (!schedule) return;
  
    const newCourse = prompt("Edit Mata Kuliah:", schedule.course);
    const newTime = prompt("Edit Waktu:", schedule.time);
  
    if (newCourse && newTime) {
      schedule.course = newCourse;
      schedule.time = newTime;
      saveAndRender(schedules);
    }
  };
  
  // Arrow + async/await
  const saveAndRender = async (schedules) => {
    await new Promise(resolve => setTimeout(resolve, 100)); // simulasi async
    saveSchedules(schedules);
    renderSchedules();
  };
  
  // Inisialisasi tampilan awal
  renderSchedules();
  
