
let score = 0;
const initialGlassware = [
    {
        name: "Химические стаканы",
        description: "Тонкостенные цилиндры, предназначены для выполнения самых разнообразных процедур. В стаканах из тугоплавкого стекла (ТС) можно нагревать жидкости.",
        image: "images/him_stakan.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Предметное стекло",
        description: "используются в микроскопии для изготовления и хранения различных срезов, мазков и других препаратов, которые затем исследуются с помощью светового микроскопа (возможно это Посуда Специального Назначения авхавах мы так и не разобрались???) ",
        image: "images/vermyaisteklo.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Пробирки",
        description: "Стеклянные отрезки трубок запаянные с одного конца, используются для проведения опытов с небольшим количеством реактивов. Бывают: простые, градуированные, с боковым отводом.",
        image: "images/probirki.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Бюкс",
        description: "Ёмкость при исследованиях, связанных с высушиванием и взвешиванием сыпучих материалов.",
        image: "images/byuks.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Конические плоскодонные колбы",
        description: "Для дистиллированной воды и растворов. Используются при титровании.",
        image: "images/konicheskie_ploskovonnyye_kolby.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Воронки",
        description: "Служат для переливания жидкостей и фильтрования. Капельные воронки - для введения в реакционную среду жидких реактивов небольшими порциями. Делительные воронки - для разделения несмешиваемых жидкостей.",
        image: "images/voronnki.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Круглодонные колбы",
        description: "Используются как для перегонки жидкостей и проведения большинства аналитических работ, так и в качестве универсального приемника при простой или вакуумной перегонке. Кроме того, она подходит для длительного и сильного нагревания, так как выполнена из термостойкого стекла.",
        image: "images/kruglodonnyye_kolby.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Кристаллизатор",
        description: "Используется для выпаривания растворов и очистки веществ путем перекристаллизации - метода, основанного на различии растворимости вещества в растворителе при различных температурах.",
        image: "images/kristallizator.jpg",
        category: "Посуда общего назначения"
    },
    {
        name: "Колба Бунзена",
        description: "Плоскодонная коническая колба из толстостенного стекла с тубусом. Колбы Бунзена применяются в основном для вакуумного фильтрования и забора реактивов.",
        image: "images/kolba_bunzena.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Колба Вюрца",
        description: "Применяется при перегонке жидкостей.",
        image: "images/kolba_vurtsa.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Капельница Шустера",
        description: "Для подачи жидкости по каплям (индикаторов).",
        image: "images/kapelnitsa_shustera.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Аллонж",
        description: "Достигается ровное, без брызг появление жидкости из холодильника в приёмник.",
        image: "images/allonj.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Насадка Вюрца",
        description: "Элемент конструкции для дистилляционной перегонки и синтеза химических веществ.",
        image: "images/nasadka_vurtsa.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Насадка Клайзена",
        description: "Используется при перегонке и синтезе.",
        image: "images/nasadka_klyazena.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Хлоркальциевая трубка",
        description: "Предохранение реактива от увлажнения и действия углекислого газа.",
        image: "images/hlorkaltsievaia_trubka.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Холодильник",
        description: "Для конденсации паров жидкостей при перегонке или нагревании. Используют для отгонки растворителей из реакционной среды, для разделения смесей жидкостей на компоненты или для очистки жидкостей перегонкой.",
        image: "images/holodilnik.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Эксикатор",
        description: "Для охлаждения тиглей и бюксов, хранение гидроскопических веществ.",
        image: "images/eksikator.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Аппарат Киппа",
        description: "Получения газов действием растворов кислот и щелочей на твёрдые вещества.",
        image: "images/apparat_kippa.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Воронка Шотта",
        description: "Для тонкой фильтрации жидкости. Используется с колбой Бунзена, подключённому к вакуумному насосу.",
        image: "images/voronnka_shotta.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Часовое стекло",
        description: "Используется в микробиологии, для выпаривания и взвешивания.",
        image: "images/chasosvoe_steklo.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Дефлегматор",
        description: "Для частичного охлаждения и конденсации паров",
        image: "images/deflegmentator.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Склянка Вульфа",
        description: "Используется для хранения газов.жидкостей и как предохранительная склянка",
        image: "images/dekma.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Насадка Дина-Старка",
        description: "Используется в органическом синтезе для получения эфиров",
        image: "images/dinastarka.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Склянка Тищенко",
        description: "Используется для хранения газов.жидкостей и как предохранительная склянка",
        image: "images/sklankatishenko.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Насадка Паук",
        description: "обеспечивает удобное и надёжное соединение между холодильником и приёмником. Это необходимо для эффективной дистилляции и других процессов органического синтеза предназначен для создания предельного остаточного давления в системе или обычного вакуума",
        image: "images/spider.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Водоструйный насос",
        description: "Для создания вакуума в лаборатории (фильтрация, перегонка под низким давлением).",
        image: "images/nasos.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Экстрактор Сокслета",
        description: "Для извлечения веществ из твердых материалов с использованием растворителя (например, анализ жиров).",
        image: "images/soskelya.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Колба Кьельдаля",
        description: "Для определения азота методом Кьельдаля (анализ белков, почвы).",
        image: "images/kolba.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Центрифужные пробирки",
        description: "Для разделения смесей",
        image: "images/centreprobirki.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Чашка Петри",
        description: "Используется для выращивания микроорганизмов (Для посевов)",
        image: "images/chaskapetri.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Плоскодонные колбы",
        description: "Нагревание, хранение, смешивание и проведение реакций",
        image: "images/ploskayakolba.jpg",
        category: "Посуда Специального Назначения"
    },
    {
        name: "Мерные колбы",
        description: "Колбы с узким горлом, рассчитанные на различный объём жидкостей. На шейке имеют метку до которой необходимо заполнить. Применяются для приготовления растворов точной концентрации.",
        image: "images/mernye_kolby.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Мерные цилиндры",
        description: "Используются для отмеривания определённых объёмов растворов, где не требуется высокая точность.",
        image: "images/mernye_tsilindry.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Мензурки",
        description: "Конические стаканы с нанесёнными делениями для измерения объёма жидкости.",
        image: "images/menzurki.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Бюретка",
        description: "Используется в объёмном количественном анализе при титровании.",
        image: "images/buretka.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Пипетка Мора",
        description: "Расчитаны на строго определённый объём.",
        image: "images/pipetka_mora.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Градуированные пипетки",
        description: "Позволяют точно отмерить объём выпускаемой жидкости.",
        image: "images/graduirovannye_pipetki.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Ареометр",
        description: "Для измерения плотности жидкости.",
        image: "images/areometr.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Пикнометр",
        description: "Для определения плотности жидкостей и твёрдых веществ.",
        image: "images/piknometr.jpg",
        category: "Мерная Посуда"
    },
    {
        name: "Воронка Бюхнера",
        description: "Для фильтрования при помощи фильтровальной бумаги под уменьшенным давлением с использованием вакуумного насоса.",
        image: "images/voronnka_byukhnera.jpg",
        category: "Фарфоровая посуда"
    },
    {
        name: "Выпаривательные чаши",
        description: "Для выпаривания лишней жидкости.",
        image: "images/viparivatelnie_chashi.jpg",
        category: "Фарфоровая посуда"
    },
    {
        name: "Фарфоровый тигель",
        description: "Для аналитических работ, служит для прокаливания различных веществ и осадков, сжигания органических веществ.",
        image: "images/farforovyi_tigel.jpg",
        category: "Фарфоровая посуда"
    },
    {
        name: "Фарфоровый треугольник",
        description: "Подставка для фарфорового тигеля.",
        image: "images/farforovyi_treugolnik.jpg",
        category: "Фарфоровая посуда"
    },
    {
        name: "Фарфоровые ступки",
        description: "Растирание веществ с помощью фарфорового пестика.",
        image: "images/farforovye_stupki.jpg",
        category: "Фарфоровая посуда"
    }
];



let savedGlassware = JSON.parse(localStorage.getItem('glassware')) || [];


const allGlassware = [...initialGlassware, ...savedGlassware];

function saveGlassware() {
    localStorage.setItem('glassware', JSON.stringify(savedGlassware));
}


document.getElementById('addForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const description = document.getElementById('description').value.trim();
    const image = document.getElementById('image').value.trim() || 'images/default.jpg';

    if (name && description) {
        const newItem = { name, description, image };
        savedGlassware.push(newItem);
        saveGlassware();
   
        const addModal = bootstrap.Modal.getInstance(document.getElementById('addModal'));
        addModal.hide();
 
        document.getElementById('addForm').reset();
 
        const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));
        document.getElementById('feedbackModalBody').innerText = "Новая посуда добавлена! Перезагрузите страницу для обновления.";
        feedbackModal.show();
    }
});

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}



function setGameMode(mode) {
    currentMode = mode;
    renderGame();
}

function renderGame() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';

    if (currentMode === 'guessByDescription') {
        renderGuessByDescription();
    } else if (currentMode === 'guessByImage') {
        renderGuessByImage();
    } else if (currentMode === 'multipleChoice') {
        renderMultipleChoice();
    } else if (currentMode === 'matching') {
        renderMatching();
    } else if (currentMode === 'timedQuiz') {
        renderTimedQuiz();
    } else if (currentMode === 'memoryMatching') {
        renderMemoryMatching();
    } else if (currentMode === 'categorySorting') {
        renderCategorySorting();
    }
    else if (currentMode === 'scrambledNames') {
        renderScrambledNames();
    }
     else if (currentMode === 'viewAll') {
        renderViewAll();
    }
}


       /**
         * 
         * @param {Array} array 
         * @returns {Array} 
         */
       function shuffle(array) {
        let currentIndex = array.length, randomIndex;

       
        while (currentIndex !== 0) {
            
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

       
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    function renderGuessByDescription() {
        const shuffledGlassware = shuffle([...allGlassware]); 
        let currentQuestion = 0; 
        let score = 0; 
    
        const totalQuestions = shuffledGlassware.length;
    
        const gameContainer = document.getElementById('gameContainer');
        gameContainer.innerHTML = '';
    
        const title = document.createElement('h2');
        title.className = 'text-center mb-4';
        title.innerText = "Угадай посуду по описанию";
        title.style.fontFamily = 'Arial, sans-serif';
        title.style.color = '#333';
        gameContainer.appendChild(title);
    
        const scoreDisplay = document.createElement('p');
        scoreDisplay.className = 'text-center fw-bold mb-4';
        scoreDisplay.innerText = `Счет: ${score} из ${totalQuestions}`;
        gameContainer.appendChild(scoreDisplay);
    
        const card = document.createElement('div');
        card.className = 'card';
        card.style.maxWidth = '500px';
        card.style.margin = '0 auto';
        gameContainer.appendChild(card);
    
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body text-center';
        card.appendChild(cardBody);
    
        const description = document.createElement('p');
        description.className = 'quiz-description mb-4';
        description.style.fontSize = '16px';
        description.style.color = '#555';
        cardBody.appendChild(description);
    
        const form = document.createElement('form');
        form.className = 'd-flex justify-content-center mb-3';
        cardBody.appendChild(form);
    
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control me-2';
        input.placeholder = 'Введите название посуды';
        input.required = true;
        form.appendChild(input);
    
        const button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn btn-primary';
        button.innerText = 'Проверить';
        form.appendChild(button);
    
        const result = document.createElement('div');
        result.className = 'mt-3';
        cardBody.appendChild(result);
    
        function showQuestion() {
            result.innerHTML = '';
            form.style.display = 'flex';
            input.value = '';
            input.disabled = false;
            button.disabled = false;
    
            if (currentQuestion >= totalQuestions) {
                endQuiz();
                return;
            }
    
            const currentItem = shuffledGlassware[currentQuestion];
            description.innerText = currentItem.description;
        }
    
        function endQuiz() {
            cardBody.innerHTML = '';
    
            const finalScore = document.createElement('h4');
            finalScore.className = 'text-center mb-4';
            finalScore.innerText = `Викторина завершена! Ваш итоговый счет: ${score} из ${totalQuestions}`;
            cardBody.appendChild(finalScore);
    
            const img = document.createElement('img');
            img.src = allGlassware.find(item => item.name.toLowerCase() === shuffledGlassware[currentQuestion - 1].name.toLowerCase()).image || 'images/default.jpg';
            img.alt = 'Изображение посуды';
            img.className = 'img-fluid mb-4';
            img.style.maxWidth = '200px';
            img.style.display = 'block';
            img.style.margin = '0 auto';
            cardBody.appendChild(img);
    
            const restartButton = document.createElement('button');
            restartButton.className = 'btn btn-success d-block mx-auto';
            restartButton.innerText = 'Перезапустить Викторину';
            restartButton.addEventListener('click', renderGuessByDescription);
            cardBody.appendChild(restartButton);
        }
    
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
    
            const userGuess = input.value.trim().toLowerCase();
            const currentItem = shuffledGlassware[currentQuestion];
    
            const isCorrect = userGuess === currentItem.name.toLowerCase();
    
            if (isCorrect) {
                score++;
                result.innerHTML = `
                    <div class="alert alert-success" role="alert">
                        Правильно! Это <strong>${currentItem.name}</strong>.
                    </div>
                `;
            } else {
                result.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        Неправильно. Правильный ответ: <strong>${currentItem.name}</strong>.
                    </div>
                `;
            }
    
            scoreDisplay.innerText = `Счет: ${score} из ${totalQuestions}`;
    
            input.disabled = true;
            button.disabled = true;
    
            setTimeout(() => {
                currentQuestion++;
                showQuestion();
            }, 2000); 
        });
    
        showQuestion();
    }
    
    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }
    



 /**
         * 
         * @param {Array} array - 
         * @returns {Array} 
         */
 function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}



function renderGuessByImage() {
    const shuffledGlassware = shuffle([...allGlassware]); 
    let currentQuestion = 0; 
    let score = 0; 
    const totalQuestions = shuffledGlassware.length;

  
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';


    const title = document.createElement('h2');
    title.className = 'text-center mb-4';
    title.innerText = "Угадай посуду по изображению";
    gameContainer.appendChild(title);

    const scoreDisplay = document.createElement('p');
    scoreDisplay.className = 'text-center fw-bold mb-4';
    scoreDisplay.innerText = `Счет: ${score} из ${totalQuestions}`;
    gameContainer.appendChild(scoreDisplay);

    
    const card = document.createElement('div');
    card.className = 'card';
    gameContainer.appendChild(card);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';
    card.appendChild(cardBody);


    const img = document.createElement('img');
    img.className = 'img-fluid quiz-image mb-4';
    img.alt = 'Изображение посуды';
    cardBody.appendChild(img);

  
    const form = document.createElement('form');
    form.className = 'd-flex justify-content-center mb-3';
    cardBody.appendChild(form);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'form-control me-2';
    input.placeholder = 'Введите название посуды';
    input.required = true;
    form.appendChild(input);

    const button = document.createElement('button');
    button.type = 'submit';
    button.className = 'btn btn-primary';
    button.innerText = 'Проверить';
    form.appendChild(button);

    
    const result = document.createElement('div');
    result.className = 'mt-3';
    cardBody.appendChild(result);

    
     
    function showQuestion() {
    
        result.innerHTML = '';
        form.style.display = 'flex';
        input.value = '';
        input.disabled = false;
        button.disabled = false;

        if (currentQuestion >= totalQuestions) {
            endQuiz();
            return;
        }

        
        const currentItem = shuffledGlassware[currentQuestion];
        img.src = currentItem.image || 'images/default.jpg';
        img.alt = currentItem.name;
    }

 
    function endQuiz() {
       
        cardBody.innerHTML = '';

        const finalScore = document.createElement('h4');
        finalScore.className = 'text-center mb-4';
        finalScore.innerText = `Викторина завершена! Ваш итоговый счет: ${score} из ${totalQuestions}`;
        cardBody.appendChild(finalScore);

        const restartButton = document.createElement('button');
        restartButton.className = 'btn btn-success d-block mx-auto';
        restartButton.innerText = 'Перезапустить Викторину';
        restartButton.addEventListener('click', renderGuessByImage);
        cardBody.appendChild(restartButton);
    }

   
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const userGuess = input.value.trim().toLowerCase();
        const currentItem = shuffledGlassware[currentQuestion];

     
        const isCorrect = userGuess === currentItem.name.toLowerCase();

        if (isCorrect) {
          
            score++;
            result.innerHTML = `
                <div class="alert alert-success" role="alert">
                    Правильно! Это ${currentItem.name}.
                </div>
                <p>${currentItem.description}</p>
            `;
        } else {
       
            result.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Неправильно. Правильный ответ: ${currentItem.name}.
                </div>
                <p>${currentItem.description}</p>
            `;
        }

     
        scoreDisplay.innerText = `Счет: ${score} из ${totalQuestions}`;

       
        input.disabled = true;
        button.disabled = true;

        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 2000); 
    });

    showQuestion();
}



function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    
    while (currentIndex !== 0) {
      
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


function getOptions(correctIndex, totalOptions = 4) {
    const options = new Set();
    options.add(correctIndex); 

    while (options.size < totalOptions) {
        const randomIndex = Math.floor(Math.random() * allGlassware.length);
        if (randomIndex !== correctIndex) {
            options.add(randomIndex);
        }
    }

    return shuffle([...options]); 
}


const gameContainer = document.getElementById('gameContainer'); 





/**
 * 
 * @param {number} correctIndex 
 * @param {number} totalOptions 
 * @returns {number[]} 
 */
function getOptions(correctIndex, totalOptions = 4) {
    const options = new Set();
    options.add(correctIndex); 

    while (options.size < totalOptions) {
        const randomIndex = Math.floor(Math.random() * allGlassware.length);
        if (randomIndex !== correctIndex) {
            options.add(randomIndex);
        }
    }

    return shuffle([...options]); 
}

function renderMultipleChoice() {
    const shuffledGlassware = shuffle([...allGlassware]);
    let score = 0; 

    gameContainer.innerHTML = ''; 
    
    const title = document.createElement('h2');
    title.className = 'game-mode-title';
    title.innerText = "Викторина";
    gameContainer.appendChild(title);

    
    const scoreDisplay = document.createElement('p');
    scoreDisplay.id = 'scoreDisplay';
    scoreDisplay.className = 'text-center fw-bold';
    scoreDisplay.innerText = `Счет: ${score}`;
    gameContainer.appendChild(scoreDisplay);

   
    const row = document.createElement('div');
    row.className = 'row g-3';

    shuffledGlassware.forEach((item) => {
        
        const correctIndex = allGlassware.indexOf(item);
        if (correctIndex === -1) {
            console.error("Элемент не найден в allGlassware:", item);
            return;
        }

        const col = document.createElement('div');
        col.className = 'col-12';

        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-index', correctIndex);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const question = document.createElement('p');
        question.className = 'card-text';
        question.innerText = item.description;

       
        const totalOptions = 4;
        if (allGlassware.length < totalOptions) {
            console.error(`Недостаточно вариантов ответов. Необходимо минимум ${totalOptions}, доступно ${allGlassware.length}.`);
            return;
        }

        const options = getOptions(correctIndex, totalOptions);

        options.forEach((optionIndex) => {
            const option = document.createElement('button');
            option.className = 'btn btn-outline-primary me-2 mb-2';
            option.innerText = allGlassware[optionIndex].name;
            option.type = 'button'; 

            option.addEventListener('click', () => {

                if (option.disabled) return;

                const isCorrect = allGlassware[optionIndex].name === item.name;

                if (isCorrect) {
                    option.classList.remove('btn-outline-primary');
                    option.classList.add('btn-success');
                    score += 1;
                } else {
                    option.classList.remove('btn-outline-primary');
                    option.classList.add('btn-danger');

                
                    const correctButton = Array.from(card.querySelectorAll('button')).find(btn => btn.innerText === item.name);
                    if (correctButton) {
                        correctButton.classList.remove('btn-outline-primary');
                        correctButton.classList.add('btn-success');
                    }
                }

               
                scoreDisplay.innerText = `Счет: ${score}`;

                const buttons = card.querySelectorAll('button');
                buttons.forEach(btn => btn.disabled = true);
            });

            cardBody.appendChild(option);
        });

        card.appendChild(question);
        card.appendChild(cardBody);
        col.appendChild(card);
        row.appendChild(col);
    });

    gameContainer.appendChild(row);
}





   /**
         * 
         * @param {Array} array 
         * @returns {Array} 
         */
   function shuffle(array) {
    let currentIndex = array.length, randomIndex;

   
    while (currentIndex !== 0) {
        
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

/**
 * 
 * @param {DragEvent} e 
 */
function dragStart(e) {
    const name = e.target.getAttribute('data-name');
    e.dataTransfer.setData('text/plain', name);

    e.dataTransfer.effectAllowed = 'move';
}

/**
 * 
 * @param {DragEvent} e 
 */
function dragOver(e) {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';
    const li = e.target.closest('li');
    if (li && !li.classList.contains('matched')) {
        li.classList.add('bg-light');
    }
}

/**
 *
 * @param {DragEvent} e 
 */
function dragLeave(e) {
    const li = e.target.closest('li');
    if (li) {
        li.classList.remove('bg-light');
    }
}

/**
 *
 * @param {DragEvent} e 
 */
function drop(e) {
    e.preventDefault();
    const li = e.target.closest('li');
    if (!li || li.classList.contains('matched')) return;

    li.classList.remove('bg-light');
    const draggedName = e.dataTransfer.getData('text/plain');
    const targetName = li.getAttribute('data-name');

    if (draggedName === targetName) {
    
        li.classList.add('bg-success', 'text-white', 'matched');
        const draggedLi = document.querySelector(`li[data-name="${draggedName}"]`);
        if (draggedLi) {
            draggedLi.classList.add('bg-success', 'text-white', 'matched');
            draggedLi.setAttribute('draggable', false);
        }
    } else {
        
        li.classList.add('bg-danger', 'text-white');
        setTimeout(() => {
            li.classList.remove('bg-danger', 'text-white');
        }, 1000);
    }
}



function renderMatching() {
    const shuffledGlassware = shuffle([...allGlassware]);
    const shuffledDescriptions = shuffle([...allGlassware]);

    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';

    const title = document.createElement('h2');
    title.className = 'game-mode-title text-center mb-4';
    title.innerText = "Сопоставь название и описание";
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.color = '#333';
    gameContainer.appendChild(title);

    const row = document.createElement('div');
    row.className = 'd-flex';
    row.style.gap = '20px';
    row.style.flexWrap = 'nowrap';
    row.style.overflowX = 'auto';
    gameContainer.appendChild(row);

    const colNames = document.createElement('div');
    
    colNames.className = 'col';
    
    colNames.style.overflowY = 'auto';
    colNames.style.paddingRight = '10px';
    const listNames = document.createElement('ul');
    listNames.className = 'list-group';
    listNames.style.minWidth = '200px';
    shuffledGlassware.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item list-group-item-action';
        li.innerText = item.name;
        li.setAttribute('data-name', item.name);
        li.style.cursor = 'pointer';
        li.style.userSelect = 'none';
        li.style.fontSize = '16px';
        li.style.fontFamily = 'Arial, sans-serif';
        li.style.padding = '12px 16px';
        li.style.marginBottom = '8px';
        li.style.borderRadius = '6px';
        li.style.backgroundColor = '#fff';
        li.style.border = '1px solid #ced4da';
        li.addEventListener('click', selectName);
        listNames.appendChild(li);
    });
    colNames.appendChild(listNames);
    row.appendChild(colNames);

    const colDescriptions = document.createElement('div');
  
    colDescriptions.className = 'col';
   
   
    colDescriptions.style.overflowY = 'auto';
    colDescriptions.style.paddingLeft = '10px';

    const listDescriptions = document.createElement('ul');
    listDescriptions.className = 'list-group';
    listDescriptions.style.minWidth = '200px';
    shuffledDescriptions.forEach(item => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center';
        li.setAttribute('data-name', item.name);
        li.setAttribute('data-desc', item.description);
        li.setAttribute('data-image', item.image);
        li.style.minHeight = '60px';
        li.style.position = 'relative';
        li.style.backgroundColor = '#f8f9fa';
        li.style.transition = 'background-color 0.3s, border 0.3s';
        li.style.padding = '10px 16px';
        li.style.borderRadius = '6px';
        li.style.border = '1px solid #ced4da';
        li.style.marginBottom = '10px';
        li.addEventListener('click', selectDescription);

        const img = document.createElement('img');
        img.src = item.image || 'images/default.jpg';
        img.alt = item.name;
        img.className = 'img-thumbnail me-2';
        img.style.width = '50px';
        img.style.height = '50px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '4px';
        li.appendChild(img);

        const span = document.createElement('span');
        span.innerText = item.description;
        span.style.flex = '1';
        span.style.fontSize = '14px';
        span.style.fontFamily = 'Arial, sans-serif';
        li.appendChild(span);

        const checkmark = document.createElement('span');
        checkmark.innerText = '✔️';
        checkmark.style.position = 'absolute';
        checkmark.style.top = '5px';
        checkmark.style.right = '10px';
        checkmark.style.fontSize = '20px';
        checkmark.style.color = '#28a745';
        checkmark.style.display = 'none';
        li.appendChild(checkmark);

        listDescriptions.appendChild(li);
    });
    colDescriptions.appendChild(listDescriptions);
    row.appendChild(colDescriptions);

    const resultMessage = document.createElement('div');
    resultMessage.className = 'alert alert-info text-center mt-4 d-none';
    resultMessage.innerText = "Поздравляем! Вы сопоставили все элементы.";
    gameContainer.appendChild(resultMessage);

    let selectedName = null;
    let matches = 0;

    function selectName(e) {
        if (e.currentTarget.classList.contains('matched')) return;
        clearSelection();
        selectedName = e.currentTarget;
        e.currentTarget.classList.add('active');
        e.currentTarget.style.backgroundColor = '#1e90ff';
        e.currentTarget.style.border = '2px solid #1e90ff';
    }

    function selectDescription(e) {
        if (e.currentTarget.classList.contains('matched')) return;
        if (!selectedName) return;
        const name = selectedName.getAttribute('data-name');
        const descName = e.currentTarget.getAttribute('data-name');
        if (name === descName) {
            e.currentTarget.style.backgroundColor = '#d4edda';
            e.currentTarget.style.border = '2px solid #28a745';
            e.currentTarget.querySelector('span:last-child').style.display = 'block';
            selectedName.remove();
            e.currentTarget.classList.add('matched');
            e.currentTarget.style.cursor = 'default';
            e.currentTarget.removeEventListener('click', selectDescription);
            matches++;
            if (matches === allGlassware.length) {
                resultMessage.classList.remove('d-none');
            }
        } else {
            e.currentTarget.style.backgroundColor = '#f8d7da';
            e.currentTarget.style.border = '2px solid #dc3545';
            setTimeout(() => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.border = '1px solid #ced4da';
            }, 1000);
        }
        clearSelection();
    }

    function clearSelection() {
        if (selectedName) {
            selectedName.classList.remove('active');
            selectedName.style.backgroundColor = '#fff';
            selectedName.style.border = '1px solid #ced4da';
        }
        selectedName = null;
    }
}

function shuffle(array) {   
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}




function dragStart(e) {
    e.dataTransfer.setData('text', e.target.getAttribute('data-name'));
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const name = e.dataTransfer.getData('text');
    const desc = e.target.getAttribute('data-desc');
    const item = allGlassware.find(g => g.name === name);
    if (item && item.description === desc) {
        e.target.classList.add('bg-success', 'text-white');
        e.target.innerText = name;
    } else {
        e.target.classList.add('bg-danger', 'text-white');
        e.target.innerText = name;
    }
}


function renderMemoryMatching() {
    const shuffledGlassware = shuffle([...allGlassware]);

    const title = document.createElement('h2');
    title.className = 'game-mode-title';
    title.innerText = "Память: Сопоставь";
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.color = '#333';
    gameContainer.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'memory-grid';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(100px, 1fr))';
    grid.style.gap = '15px';
    grid.style.maxWidth = '600px';
    grid.style.margin = '0 auto';
    gameContainer.appendChild(grid);

    const cards = [];
    allGlassware.forEach(item => {
        cards.push({ type: 'image', content: item.image, name: item.name });
        cards.push({ type: 'name', content: item.name, name: item.name });
    });

    const shuffledCards = shuffle(cards);
    let flippedCards = [];

    shuffledCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.name = card.name;
        cardElement.style.position = 'relative';
        cardElement.style.width = '100%';
        cardElement.style.paddingTop = '100%';
        cardElement.style.cursor = 'pointer';
        cardElement.style.transformStyle = 'preserve-3d';
        cardElement.style.transition = 'transform 0.6s';
        cardElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        cardElement.style.borderRadius = '8px';
        cardElement.style.backgroundColor = '#f0f0f0';

        const front = document.createElement('div');
        front.className = 'front';
        front.style.position = 'absolute';
        front.style.top = '0';
        front.style.left = '0';
        front.style.width = '100%';
        front.style.height = '100%';
        front.style.backfaceVisibility = 'hidden';
        front.style.borderRadius = '8px';
        front.style.display = 'flex';
        front.style.alignItems = 'center';
        front.style.justifyContent = 'center';
        front.style.backgroundColor = '#fff';
        front.style.transition = 'background-color 0.3s';

        if (card.type === 'image') {
            const img = document.createElement('img');
            img.src = card.content;
            img.alt = card.name;
            img.className = 'memory-img';
            img.style.width = '80%';
            img.style.height = '80%';
            img.style.objectFit = 'contain';
            front.appendChild(img);
        } else {
            front.innerText = card.content;
            front.style.fontSize = '16px';
            front.style.color = '#333';
            front.style.fontFamily = 'Arial, sans-serif';
        }

        const back = document.createElement('div');
        back.className = 'back';
        back.innerText = '?';
        back.style.position = 'absolute';
        back.style.top = '0';
        back.style.left = '0';
        back.style.width = '100%';
        back.style.height = '100%';
        back.style.backfaceVisibility = 'hidden';
        back.style.borderRadius = '8px';
        back.style.backgroundColor = '#1e90ff';
        back.style.color = '#fff';
        back.style.display = 'flex';
        back.style.alignItems = 'center';
        back.style.justifyContent = 'center';
        back.style.fontSize = '24px';
        back.style.fontFamily = 'Arial, sans-serif';
        back.style.transform = 'rotateY(180deg)';
        back.style.transition = 'background-color 0.3s';

        cardElement.appendChild(front);
        cardElement.appendChild(back);

        cardElement.addEventListener('click', () => {
            if (cardElement.classList.contains('flipped') || flippedCards.length === 2) return;
            cardElement.style.transform = 'rotateY(180deg)';
            cardElement.classList.add('flipped');
            flippedCards.push(cardElement);

            if (flippedCards.length === 2) {
                const [first, second] = flippedCards;
                if (first.dataset.name === second.dataset.name) {
                    first.style.cursor = 'default';
                    second.style.cursor = 'default';
                    first.querySelector('.back').style.backgroundColor = '#28a745';
                    second.querySelector('.back').style.backgroundColor = '#28a745';
                    first.querySelector('.back').innerText = '✔️';
                    second.querySelector('.back').innerText = '✔️';
                    flippedCards = [];
                } else {
                    setTimeout(() => {
                        first.style.transform = 'rotateY(0deg)';
                        second.style.transform = 'rotateY(0deg)';
                        first.classList.remove('flipped');
                        second.classList.remove('flipped');
                        flippedCards = [];
                    }, 1000);
                }
            }
        });

        grid.appendChild(cardElement);
    });
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}








function renderScrambledNames() {
    const shuffledGlassware = shuffle([...allGlassware]);
    const title = document.createElement('h2');
    title.className = 'game-mode-title-scrambled';
    title.innerText = "Смешанные имена";
    title.style.textAlign = 'center';
    title.style.marginBottom = '20px';
    title.style.fontFamily = 'Arial, sans-serif';
    title.style.color = '#333';
    gameContainer.appendChild(title);

    let currentIndex = 0;
    let score = 0;

    const scoreDisplay = document.createElement('p');
    scoreDisplay.id = 'scrambledScore';
    scoreDisplay.className = 'text-center fw-bold';
    scoreDisplay.innerText = `Счет: ${score}`;
    scoreDisplay.style.fontFamily = 'Arial, sans-serif';
    scoreDisplay.style.fontSize = '18px';
    scoreDisplay.style.color = '#333';
    gameContainer.appendChild(scoreDisplay);

    const questionContainer = document.createElement('div');
    questionContainer.className = 'scrambled-question-container';
    questionContainer.style.maxWidth = '600px';
    questionContainer.style.margin = '20px auto';
    questionContainer.style.padding = '20px';
    questionContainer.style.border = '1px solid #ccc';
    questionContainer.style.borderRadius = '8px';
    questionContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    gameContainer.appendChild(questionContainer);

    function showQuestion() {
        if (currentIndex >= shuffledGlassware.length) {
            endGame();
            return;
        }
        const item = shuffledGlassware[currentIndex];
        questionContainer.innerHTML = '';

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        image.style.width = '100px';
        image.style.height = '100px';
        image.style.objectFit = 'cover';
        image.style.display = 'block';
        image.style.margin = '0 auto 20px';
        image.style.borderRadius = '8px';
        questionContainer.appendChild(image);

        const description = document.createElement('p');
        description.className = 'scrambled-description';
        description.innerText = item.description;
        description.style.fontSize = '16px';
        description.style.color = '#555';
        description.style.textAlign = 'center';
        description.style.marginBottom = '10px';
        questionContainer.appendChild(description);

        const scrambledName = scrambleWord(item.name);
        const scrambledDisplay = document.createElement('p');
        scrambledDisplay.className = 'scrambled-name';
        scrambledDisplay.innerText = `Смешанное имя: ${scrambledName}`;
        scrambledDisplay.style.fontSize = '18px';
        scrambledDisplay.style.fontWeight = 'bold';
        scrambledDisplay.style.textAlign = 'center';
        scrambledDisplay.style.marginBottom = '20px';
        questionContainer.appendChild(scrambledDisplay);

        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'form-control scrambled-input';
        input.placeholder = "Введите правильное название";
        input.style.width = '100%';
        input.style.padding = '10px';
        input.style.marginBottom = '10px';
        input.style.borderRadius = '4px';
        input.style.border = '1px solid #ccc';
        questionContainer.appendChild(input);

        const submitButton = document.createElement('button');
        submitButton.className = 'btn btn-primary scrambled-submit';
        submitButton.innerText = "Ответить";
        submitButton.style.width = '100%';
        submitButton.style.padding = '10px';
        submitButton.style.borderRadius = '4px';
        submitButton.style.border = 'none';
        submitButton.style.backgroundColor = '#1e90ff';
        submitButton.style.color = '#fff';
        submitButton.style.fontSize = '16px';
        submitButton.addEventListener('click', () => {
            const userGuess = input.value.trim().toLowerCase();
            const feedbackModal = new bootstrap.Modal(document.getElementById('feedbackModal'));
            if (userGuess === item.name.toLowerCase()) {
                score++;
                scoreDisplay.innerText = `Счет: ${score}`;
                document.getElementById('feedbackModalBody').innerText = "Правильно!";
            } else {
                document.getElementById('feedbackModalBody').innerText = `Неправильно. Правильный ответ: ${item.name}`;
            }
            feedbackModal.show();
            currentIndex++;
            setTimeout(showQuestion, 500);
        });
        questionContainer.appendChild(submitButton);
    }

    function scrambleWord(word) {
        const arr = word.split('');
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr.join('');
    }

    function endGame() {
        questionContainer.innerHTML = '';
        const endMessage = document.createElement('p');
        endMessage.className = 'scrambled-end-message';
        endMessage.innerText = `Игра окончена! Ваш счет: ${score}`;
        endMessage.style.fontSize = '20px';
        endMessage.style.fontWeight = 'bold';
        endMessage.style.textAlign = 'center';
        endMessage.style.color = '#333';
        questionContainer.appendChild(endMessage);
    }

    showQuestion();
}


function renderViewAll() {
    const categories = ["Посуда общего назначения", "Посуда Специального Назначения", "Мерная Посуда", "Фарфоровая посуда"];
    categories.forEach(category => {
        const categoryTitle = document.createElement('h3');
        categoryTitle.className = 'category-title';
        categoryTitle.innerText = category;
        gameContainer.appendChild(categoryTitle);
        
        const row = document.createElement('div');
        row.className = 'row g-3';
        
        const filteredItems = allGlassware.filter(item => item.category === category);
        filteredItems.forEach(item => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-4';
            
            const card = document.createElement('div');
            card.className = 'card h-100';
            
            const img = document.createElement('img');
            img.src = item.image || 'images/default.jpg';
            img.className = 'card-img-top';
            img.alt = item.name;
            
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = item.name;
            
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = item.description;
            
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);
        });
        
        gameContainer.appendChild(row);
    });
}document.addEventListener('DOMContentLoaded', () => {
    setGameMode('viewAll')
});
