const helloWorld = () => {
    /*eslint-disable no-console */
    document.getElementsByClassName('rock')[0].addEventListener('click', () => { alert('rock'); });
    document.getElementsByClassName('paper')[0].addEventListener('click', () => { alert('paper'); });
    document.getElementsByClassName('scissors')[0].addEventListener('click', () => { alert('scissors'); });

};

helloWorld();
