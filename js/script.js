const loginContainer = document.querySelector('.login-container');
const cornerSensitivity = 30;

loginContainer.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = loginContainer;

    const isNearTopLeft = offsetX < cornerSensitivity && offsetY < cornerSensitivity;
    const isNearTopRight = offsetX > offsetWidth - cornerSensitivity && offsetY < cornerSensitivity;
    const isNearBottomLeft = offsetX < cornerSensitivity && offsetY > offsetHeight - cornerSensitivity;
    const isNearBottomRight = offsetX > offsetWidth - cornerSensitivity && offsetY > offsetHeight - cornerSensitivity;

    if (isNearTopLeft || isNearTopRight || isNearBottomLeft || isNearBottomRight) {
        const x = (offsetX - offsetWidth / 2) / (offsetWidth / 2);
        const y = (offsetY - offsetHeight / 2) / (offsetHeight / 2);
        loginContainer.style.transform = `perspective(1000px) rotateX(${y * 5}deg) rotateY(${x * 5}deg) translateY(-20px)`;
    } else {
        loginContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(-20px)';
    }
});

loginContainer.addEventListener('mouseleave', () => {
    loginContainer.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
});