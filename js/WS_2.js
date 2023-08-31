    document.getElementById("index").addEventListener("click", function() {
    window.location.href = "index.html";
    });
    document.getElementById("WS_Saved_Page").addEventListener("click", function() {
    window.location.href = "about.html";
    });

const $saved_WS_Container = document.getElementById('saved_WS');
let $saved_WS = JSON.parse(localStorage.getItem('saved_WS') || '[]');
const $clear_Button = document.getElementById('clear_Button'); 
const $EP_BTN = document.getElementById('EP_BTN');

function render_WS() {
    if ($saved_WS.length === 0) {
        $saved_WS_Container.style.display = 'none';
    } else {
        $saved_WS_Container.style.display = 'block';
    }
    $saved_WS_Container.innerHTML = '';

    $saved_WS.forEach((ws_word, index) => {
        const $WS_Element = document.createElement('div');
        $WS_Element.className = 'ws_item';

        const $contentElement = document.createElement('p');
        $contentElement.textContent = ws_word;
        $WS_Element.appendChild($contentElement);

        const $deleteButton = document.createElement('button');
        $deleteButton.textContent = 'X';
        $deleteButton.style.color = 'white';
        $deleteButton.style.border = 'none';
        $deleteButton.style.height = '20px';
        $deleteButton.style.borderRadius = '5px';
        $deleteButton.style.background = 'rgb(168, 35, 35)'; 
        $deleteButton.addEventListener('mouseover', () => {
        $deleteButton.style.background = 'rgb(255, 3, 3)'; 
        });
        $deleteButton.addEventListener('mouseout', () => {
        $deleteButton.style.color = 'white';
        $deleteButton.style.background = 'rgb(168, 35, 35)'; 
        });
        const $buttonWrapper = document.createElement('div');
        $buttonWrapper.appendChild($deleteButton);
        $buttonWrapper.style.display = 'block';
        document.body.appendChild($buttonWrapper);

        $deleteButton.addEventListener('click', () => {
            deleteQuoteFromStorage(index);
        });
        $WS_Element.appendChild($buttonWrapper);

        $saved_WS_Container.appendChild($WS_Element);
    });
}

render_WS();

$clear_Button.addEventListener('click', () => {
    localStorage.removeItem('saved_WS');
    $saved_WS = [];
    render_WS();
});

$EP_BTN.addEventListener('click', () => {
    const exportedData = JSON.stringify($saved_WS);
    const encodedData = encodeURIComponent(exportedData);
    const shareLink = window.location.origin + '/ormi3_project_1_WS.github.io/about.html?data=' + encodedData;

    navigator.clipboard.writeText(shareLink)
        .then(() => {
            alert('링크가 클립보드에 복사되었습니다.');
        })
        .catch((err) => {
            console.error('링크 복사 실패:', err);
        });
});

function deleteQuoteFromStorage(index) {
    $saved_WS.splice(index, 1);
    localStorage.setItem('saved_WS', JSON.stringify($saved_WS));
    render_WS();
}

function addQuoteToStorage(content) {
    $saved_WS.push(content);
    localStorage.setItem('saved_WS', JSON.stringify($saved_WS));
    render_WS();
}
