let appointments = [
  { id: 1, name: "Carlos Silva", type: "Musculação", date: "2026-11-01", time: "08:00", price: 80 },
  { id: 2, name: "Mariana Costa", type: "Treino Funcional", date: "2026-11-01", time: "09:30", price: 90 }
];

const form = document.getElementById('appointment-form');
const appointmentsList = document.getElementById('appointments-list');
const totalSessoesEl = document.getElementById('total-sessoes');
const faturamentoEl = document.getElementById('faturamento');
const totalAlunosEl = document.getElementById('total-alunos');

document.addEventListener('DOMContentLoaded', () => {
  renderAppointments();
  updateKPIs();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newAppointment = {
    id: Date.now(),
    name: document.getElementById('student-name').value,
    type: document.getElementById('workout-type').value,
    date: document.getElementById('date').value,
    time: document.getElementById('time').value,
    price: parseFloat(document.getElementById('price').value)
  };

  appointments.push(newAppointment);
  renderAppointments();
  updateKPIs();

  form.reset();
  document.getElementById('price').value = "80";
});

function renderAppointments() {
  appointmentsList.innerHTML = '';

  if (appointments.length === 0) {
    appointmentsList.innerHTML = '<p style="color: var(--text-muted);">Nenhum agendamento registado.</p>';
    return;
  }

  appointments.forEach(app => {
    const item = document.createElement('div');
    item.className = 'appointment-item';
    item.innerHTML = `
      <div class="appointment-info">
        <h4>${app.name}</h4>
        <p>${app.type} • ${app.date} às ${app.time}</p>
      </div>
      <div class="appointment-badge">R$ ${app.price.toFixed(2)}</div>
    `;
    appointmentsList.appendChild(item);
  });
}

function updateKPIs() {
  const totalSessoes = appointments.length;
  const faturamento = appointments.reduce((acc, curr) => acc + curr.price, 0);
  const alunosUnicos = new Set(appointments.map(a => a.name.toLowerCase()));

  totalSessoesEl.textContent = totalSessoes;
  faturamentoEl.textContent = `R$ ${faturamento.toFixed(2)}`;
  totalAlunosEl.textContent = alunosUnicos.size;
}