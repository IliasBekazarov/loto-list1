function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim(); // Убираем лишние пробелы

  if (taskText === "") {
    alert("Введите задачу");
    return;
  }

  const taskList = document.getElementById("taskList");
  const taskItem = document.createElement("li");

  taskItem.textContent = taskText;

  // Создаем кнопку "Выполнено"
  const completeButton = document.createElement("button");
  completeButton.textContent = "-";
  completeButton.classList.add("completeBtn");

  // Добавляем событие для кнопки "Выполнено"
  completeButton.onclick = function () {
    taskItem.classList.toggle("completed");
    taskItem.style.backgroundColor = 'white';
  };

  // Создаем кнопку "Удалить"
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");

  // Создаем элемент изображения для кнопки "Удалить"
  const deleteImg = document.createElement("img");
  deleteImg.src = "path_to_image.png"; // Замените 'path_to_image.png' на путь к вашему изображению
  deleteImg.alt = ""; // Текст, если картинка не загрузится
  deleteImg.style.width = "30px"; // Можно задать размер изображения
  deleteImg.style.height = "30px";

  // Добавляем изображение в кнопку "Удалить"
  deleteButton.appendChild(deleteImg);

  // Добавляем событие для кнопки "Удалить"
  deleteButton.onclick = function () {
    taskList.removeChild(taskItem);
  };

  // Добавляем кнопки к элементу списка
  taskItem.prepend(completeButton);
  taskItem.appendChild(deleteButton);

  // Добавляем элемент списка в HTML
  taskList.appendChild(taskItem);

  // Очищаем поле ввода
  taskInput.value = "";
}
