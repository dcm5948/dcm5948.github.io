function submitChanges()
{
    let name = document.getElementById("name").value
    let greeting = document.getElementById("greeting");
    greeting.textContent = "Hi there, " + name + "!";

    let message = document.getElementById("messageInput").value
    let messageParagraph = document.getElementById("message");
    messageParagraph.textContent = message;

    let color = document.getElementById("options").value;
    document.body.style.backgroundColor = color;

}