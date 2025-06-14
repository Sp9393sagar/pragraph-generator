function generateParagraphs() {
  const topic = document.getElementById('topic').value.trim();
  const count = parseInt(document.getElementById('paragraphCount').value);
  const list = document.getElementById('paragraphList');
  list.innerHTML = '';

  if (!topic || isNaN(count)) {
    alert('Please enter a topic and select number of paragraphs.');
    return;
  }

  for (let i = 1; i <= count; i++) {
    const li = document.createElement('li');
    li.textContent = `This is paragraph ${i} about "${topic}". It provides sample content discussing the topic in a basic and generated manner for demonstration.`;
    list.appendChild(li);
  }
}
