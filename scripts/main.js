console.log('hello')

//Дано масив  об'єктів з адресами новоїпошти (місто,  вулиця, будинок, номер відділеня). 
// Напишіть код який буде знаходити відділеня по номеру та  виводити у дів  його  адресу

let selEl = document.querySelector('.selectPosht')
let adressSec = document.querySelector('.adressSection')

let adressArr = [
    { city: 'м. Київ, Україна', adress: 'Вулиця Тараса Шевченка', building: 12, numSection: '12' },
    { city: 'м. Львів, Україна', adress: 'Проспект Лесі Українки', building: 34, numSection: '23' },
    { city: 'м. Харків, Україна', adress: 'Вулиця Івана Франка', building: 56, numSection: '42' },
    { city: ' м. Одеса, Україна', adress: 'Вулиця Михайла Коцюбинського', building: 23, numSection: '45' },
    { city: 'м. Чернівці, Україна', adress: 'Вулиця Ольги Кобилянської', building: 78, numSection: '25' },
    { city: 'м. Вінниця, Україна', adress: 'Провулок Василя Стуса', building: 15, numSection: '10' },
    { city: 'м. Полтава, Україна', adress: 'Бульвар Григорія Сковороди', building: 89, numSection: '39' },
    { city: 'м. Дніпро, Україна', adress: 'Вулиця Павла Тичини', building: 40, numSection: '78' },
    { city: ' м. Запоріжжя, Україна', adress: 'Площа Ліни Костенко ', building: 31, numSection: '57' },
    { city: 'м. Суми, Україна', adress: 'Вулиця Олександра Довженка', building: 20, numSection: '16' },
    { city: ' м. Тернопіль, Україна', adress: 'Вулиця Панаса Мирного', building: 30, numSection: '15' },
    { city: 'м. Житомир, Україна', adress: 'Проспект Івана Котляревського', building: 22, numSection: '32' },
    { city: 'м. Чернігів, Україна', adress: 'Вулиця Василя Симоненка', building: 48, numSection: '43' },
]



selEl.addEventListener('change',(ev) =>{
    let {value} = ev.target;

    const resultFind = adressArr.find((item)=>{
        const newRes = item.numSection === value;
        if(newRes === false){
            return
        }
        return adressSec.innerHTML = `
        ${item.city} 
        ${''} 
        ${'Будинок'}
        ${' '}
        ${item.building}
        `
    })
    
})


