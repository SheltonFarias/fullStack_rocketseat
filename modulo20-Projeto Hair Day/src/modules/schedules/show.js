import dayjs from "dayjs";

// Selecionar as sessões manhã, tarde, noite
const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-Afternoon");
const periodNight = document.getElementById("period-night");

export function schedulesShow({ dailySchedules }) {
  try {
    // limpa as listas
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Rederiza os agendamentos por periodo
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("strong")
      const name = document.createElement("span")

      // Adiciona o id do agendamento
      item.setAttribute("data-id", schedule.id)

      time.textContent = dayjs(schedule.when).format("HH:mm")
      name.textContent = schedule.name


      // criar o item de cancelar o agendamento
      const cancelIcon = document.createElement("img")
      cancelIcon.classList.add("")
      cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
      cancelIcon.setAttribute("alt", "cancelar")

      // Adiciona o tempo, nome e ícone no item
      item.append(time, name, cancelIcon)

      //Obtem somente a hora
      const hour = dayjs(schedule.when).hour()

      // Renderiza o agendamento na sessão (Manhã, tarde ou noite)
      if(hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18){
        periodAfternoon.appendChild(item)
      } else{
        periodNight.appendChild(item)
      }

    });

  } catch (error) {
    alert("Não possivel exibir os agendamentos");
    console.log(error);
  }
}
