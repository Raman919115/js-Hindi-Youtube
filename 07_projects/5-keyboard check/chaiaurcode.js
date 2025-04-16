const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class = 'color'>
    <table>
    <tr>
    <th>Key</th>
    <th>Keycode</th>
    <th>Code</th>
    <tr>
    <td>${e.key === ' ' ? 'space' :e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>

    </table>
    </div>
    `;
});
