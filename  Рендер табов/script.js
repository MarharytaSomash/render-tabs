let menu = [
	{
		tab: 'Платежі',
		title: 'Ну де ще ви бачили безкоштовні перекази?',
		description: 'Поповнення картки monobank — безкоштовно! А далі поповнюйте мобільний, сплачуйте комунальні та інші послуги без будь-якої комісії. Навіть за рахунок кредитних коштів! Переказуйте гроші своїм контактам за один клік — це простіше, ніж ви можете собі уявити',
		icon: 'payment'
	},
	{
		tab: 'Виписка',
		title: 'Усі ваші витрати на кінчиках пальців',
		description: 'Завжди хотіли перевірити, який відсоток ваших витрат припадає на нестримні веселощі? Тепер це просто. Користуйтеся карткою monobank, і ви завжди зможете бачити свої витрати в красивому й структурованому вигляді',
		icon: 'extract'
	},
	{
		tab: 'Налаштування картки',
		title: 'Забудьте все, що ви знали про банкінг',
		description: 'Установлюйте самостійно будь-які ліміти, зокрема для запиту PIN-коду, коли купуєте. Не можете знайти картку? Заблокуйте її на якийсь час, далі від гріха. Змінюйте ПІН просто в додатку, без походів до банкомата',
		icon: 'settings'
	}
];

const unactivateTabs = () => {
    document.querySelector('.tab.active').classList.remove('active')
}

let renderTab = (item, index)=> {
    let tab = document.createElement("button");
    tab.className = "tab";
    tab.innerHTML = item.tab;
    button__tabs.append(tab);
    

    tab.addEventListener('click', () => {
        unactivateTabs();
        tab.classList.add("active");
        renderContent(item);
    });

    if(!index){
        tab.classList.add(`active`);
        renderContent(item);
    }
}

const renderContent = (item) => {
    title__content.innerHTML = item.title;
    contentIcon.src = `icons/${item.icon}.svg`;
    contentIcon.alt = item.icon;
  
     title__content.title = item.title;
    contentText.innerHTML = item.description;
};

const body = document.querySelector("body");

let wrapper = document.createElement("div");
wrapper.className = "wrapper"
body.append(wrapper)

let button__tabs = document.createElement("div");
button__tabs.className = "button_tabs"
wrapper.append(button__tabs)

let tab__content = document.createElement("div");
tab__content.className = "tab_content";
wrapper.append(tab__content)

let title__content = document.createElement("h2");
title__content.className = "title_content";
tab__content.append(title__content);

let contentImage = document.createElement(`div`);
contentImage.className = `img__content`;
tab__content.append(contentImage);

let contentIcon = document.createElement(`img`);
contentImage.append(contentIcon);

let contentText = document.createElement("p");
contentText.className = "contentText";
tab__content.append(contentText);


menu.forEach((item, index) => renderTab(item,index));

