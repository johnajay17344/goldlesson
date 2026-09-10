const allQuestions = [
    { num: 1, text: "Choose the correct article: 'I bought __ pen at the shop.'", options: ["a", "an", "the", "no article"], correct: 0, explanation: "Use 'a' before consonant sounds. 'pen' starts with 'p' (consonant sound)." },
    { num: 2, text: "Choose the correct article: 'She is __ teacher in our school.'", options: ["a", "an", "the", "no article"], correct: 0, explanation: "Use 'a' for new/unknown things. We don't know which teacher yet." },
    { num: 3, text: "Choose the correct article: 'I ate __ apple this morning.'", options: ["a", "an", "the", "no article"], correct: 1, explanation: "Use 'an' before vowel sounds. 'apple' starts with 'a' (vowel sound)." },
    { num: 4, text: "Choose the correct article: '__ sun rises in the east.'", options: ["a", "an", "the", "no article"], correct: 2, explanation: "Use 'the' because there is only one sun in our sky." },
    { num: 5, text: "Choose the correct article: 'He is __ doctor at __ hospital.'", options: ["a, a", "an, the", "a, the", "the, the"], correct: 2, explanation: "First 'a' (new person), then 'the' (specific hospital we know about)." },
    { num: 6, text: "Choose the correct article: '__ students must submit their homework.'", options: ["a", "an", "the", "no article"], correct: 3, explanation: "Use no article for plural nouns in general statements." },
    { num: 7, text: "Choose the correct article: 'I need __ umbrella because it is raining.'", options: ["a", "an", "the", "no article"], correct: 1, explanation: "Use 'an' before vowel sounds. 'umbrella' starts with 'u' (vowel sound)." },
    { num: 8, text: "Choose the correct article: '__ boy gave __ book to __ teacher.'", options: ["the, a, the", "a, an, the", "an, a, the", "a, a, the"], correct: 0, explanation: "Specific boy = 'the', new book = 'a', specific teacher = 'the'." },
    { num: 9, text: "Which sentence uses articles CORRECTLY?", options: ["I saw a dog and an cat.", "She is an student in JSS 2.", "He gave the apple to the teacher.", "They like a football and a basketball."], correct: 2, explanation: "'He gave the apple to the teacher' is correct. The others have wrong vowel/consonant choices." },
    { num: 10, text: "Choose the correct article: 'Lagos is __ big city in Nigeria.'", options: ["a", "an", "the", "no article"], correct: 0, explanation: "Use 'a' for singular countable nouns. 'city' starts with 'c' (consonant sound)." },
    { num: 11, text: "Choose the correct article: 'I bought __ egg and __ orange at __ market.'", options: ["a, an, the", "an, an, the", "a, a, the", "an, a, the"], correct: 1, explanation: "'egg' starts with vowel sound (e), 'orange' starts with vowel sound (o), 'market' is specific." },
    { num: 12, text: "When do we use 'a'?", options: ["Before vowel sounds", "Before consonant sounds", "For specific things", "For plural things"], correct: 1, explanation: "We use 'a' before words that start with consonant sounds like: a boy, a desk, a pen." },
    { num: 13, text: "When do we use 'an'?", options: ["Before consonant sounds", "Before vowel sounds", "Only for people", "Only for places"], correct: 1, explanation: "We use 'an' before words that start with vowel sounds like: an apple, an egg, an idea." },
    { num: 14, text: "Choose the correct article: 'My brother is __ engineer.'", options: ["a", "an", "the", "no article"], correct: 0, explanation: "Use 'a' for new/unknown things. 'engineer' starts with 'e' (vowel) so it's 'an engineer'." },
    { num: 15, text: "Choose the correct article: 'He gave me __ idea.'", options: ["a", "an", "the", "no article"], correct: 1, explanation: "Use 'an' before vowel sounds. 'idea' starts with 'i' (vowel sound)." },
    { num: 16, text: "Choose the correct article: 'I have __ book and __ notebook. __ book is blue.'", options: ["a, a, the", "an, a, the", "a, an, the", "the, the, the"], correct: 0, explanation: "First two are new things, third is now specific/known." },
    { num: 17, text: "Which is CORRECT?", options: ["I saw an dog", "She ate a apple", "He is an teacher", "I bought an egg"], correct: 3, explanation: "'I bought an egg' is correct. 'egg' starts with vowel sound." },
    { num: 18, text: "Choose the correct article: 'She attends __ school in town.'", options: ["a", "an", "the", "no article"], correct: 2, explanation: "Use 'the' because we know which school (a specific school)." },
    { num: 19, text: "Choose the correct article: '__ cats and __ dogs are animals.'", options: ["a, a", "an, an", "the, the", "no article, no article"], correct: 3, explanation: "Use no article for plural general statements." },
    { num: 20, text: "Choose the correct article: 'What is __ name of __ school?'", options: ["the, the", "a, a", "an, an", "the, a"], correct: 0, explanation: "Both are specific/known things, so use 'the'." },
    { num: 21, text: "Choose the correct article: 'I am __ student at __ secondary school.'", options: ["a, a", "an, a", "a, the", "an, the"], correct: 0, explanation: "'student' starts with consonant sound (s), 'secondary school' is not specific here." },
    { num: 22, text: "Choose the correct article: 'She bought __ new dress at __ market yesterday.'", options: ["a, a", "an, the", "a, the", "an, a"], correct: 2, explanation: "'dress' starts with consonant sound (d), 'market' is specific (the market she went to)." },
    { num: 23, text: "Which sentence is INCORRECT?", options: ["He is an doctor.", "I want a pen.", "She bought the book.", "They play a football game."], correct: 0, explanation: "'He is an doctor' is wrong. 'doctor' starts with consonant sound (d), so use 'a'." },
    { num: 24, text: "Choose the correct article: '__ teacher gave us __ assignment last week.'", options: ["a, an", "the, an", "an, a", "the, a"], correct: 1, explanation: "'teacher' is specific/known, 'assignment' starts with vowel sound (a)." },
    { num: 25, text: "Choose the correct article: 'There is __ cat under __ table in __ living room.'", options: ["a, the, the", "an, a, the", "a, a, a", "the, the, the"], correct: 0, explanation: "'cat' is new (a), 'table' is specific (the), 'living room' is specific (the)." },
    { num: 26, text: "What do we use 'the' for?", options: ["New/unknown things", "Plural things only", "Specific/known things", "All nouns"], correct: 2, explanation: "Use 'the' for things that are specific or already known." },
    { num: 27, text: "Choose the correct article: '__ Amara likes __ mathematics very much.'", options: ["the, a", "an, the", "a, the", "no article, no article"], correct: 3, explanation: "No article before names (Amara) or subjects (mathematics) in general." },
    { num: 28, text: "Choose the correct article: 'I saw __ interesting film at __ cinema.'", options: ["a, a", "an, the", "an, a", "a, the"], correct: 1, explanation: "'interesting' starts with vowel sound (i), 'cinema' is specific/known." },
    { num: 29, text: "Which sentence uses ALL articles CORRECTLY?", options: ["A boy gave an pen to the teacher.", "An girl bought a orange at the market.", "The student submitted an assignment to the teacher.", "A teacher gave a book to an student."], correct: 2, explanation: "'The student submitted an assignment to the teacher' is all correct." },
    { num: 30, text: "Choose the correct article: '__ alphabet has __ letter. __ first letter is 'A'.'", options: ["the, 26, the", "an, 26, the", "the, 26, a", "a, 26, the"], correct: 0, explanation: "'alphabet' is specific (the), number doesn't need article, 'first letter' is specific (the)." }
];

        let shuffledQuestions = [];
        let currentQuestionIndex = 0;
        let answers = {};
        let correct = 0;

        function shuffleArray(array) {
            const shuffled = [...array];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            return shuffled;
        }

        function initExam() {
            shuffledQuestions = shuffleArray(allQuestions);
            renderQuestion();
        }

        function renderQuestion() {
            const q = shuffledQuestions[currentQuestionIndex];
            const isAnswered = answers[currentQuestionIndex] !== undefined;
            
            const html = `
                <div class="question-container">
                    <div class="question-header">
                        <div class="question-number">Question ${currentQuestionIndex + 1}/30</div>
                        <div class="question-topic">Integers & Decimals</div>
                    </div>
                    <div class="question-text">${q.text}</div>
                    <div class="options">
                        ${q.options.map((opt, idx) => {
                            const letter = String.fromCharCode(65 + idx);
                            const isCorrect = isAnswered && idx === q.correct;
                            const isWrong = isAnswered && idx === answers[currentQuestionIndex] && idx !== q.correct;
                            const classes = ['option'];
                            if (isAnswered) classes.push('answered');
                            if (isCorrect) classes.push('correct');
                            if (isWrong) classes.push('wrong');
                            
                            return `
                                <div class="${classes.join(' ')}" onclick="selectAnswer(${idx})" ${isAnswered ? 'style="pointer-events: none;"' : ''}>
                                    <div class="option-letter">${letter}</div>
                                    <div>${opt}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    ${isAnswered ? `
                        <div class="feedback show ${answers[currentQuestionIndex] === q.correct ? 'correct' : 'wrong'}">
                            <div class="feedback-title">${answers[currentQuestionIndex] === q.correct ? '✅ Correct!' : '❌ Incorrect'}</div>
                            <div>${q.explanation}</div>
                        </div>
                    ` : ''}
                </div>
                <div class="buttons">
                    <button class="btn-secondary" onclick="previousQuestion()" ${currentQuestionIndex === 0 ? 'disabled' : ''}>← Previous</button>
                    ${!isAnswered ? 
                        `<button class="btn-secondary" disabled>Select an answer</button>` :
                        `<button class="btn-primary" onclick="nextQuestion()" ${currentQuestionIndex === shuffledQuestions.length - 1 ? 'style="flex: 1;"' : ''}>
                            ${currentQuestionIndex === shuffledQuestions.length - 1 ? 'Submit Exam ✓' : 'Next →'}
                        </button>`
                    }
                </div>
            `;
            
            document.getElementById('examContent').innerHTML = html;
            updateProgress();
        }

        function selectAnswer(idx) {
            const q = shuffledQuestions[currentQuestionIndex];
            answers[currentQuestionIndex] = idx;
            if (idx === q.correct) {
                correct++;
            }
            renderQuestion();
        }

        function nextQuestion() {
            if (currentQuestionIndex === shuffledQuestions.length - 1) {
                showResults();
            } else {
                currentQuestionIndex++;
                renderQuestion();
            }
        }

        function previousQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderQuestion();
            }
        }

        function updateProgress() {
            const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
            document.getElementById('progressFill').style.width = progress + '%';
            document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
            document.getElementById('correctCount').textContent = correct;
            const percentage = Math.round((correct / (currentQuestionIndex + 1)) * 100);
            document.getElementById('scorePercentage').textContent = percentage + '%';
        }

        function showResults() {
            const percentage = Math.round((correct / shuffledQuestions.length) * 100);
            let message = '';
            if (percentage >= 90) message = '🎉 Outstanding! Excellent mastery!';
            else if (percentage >= 80) message = '👍 Very Good! Strong understanding!';
            else if (percentage >= 70) message = '📚 Good effort! Keep practicing!';
            else if (percentage >= 60) message = '💪 Fair attempt! Review the concepts!';
            else message = '⚠️ Needs more practice. Study harder!';

            document.getElementById('finalScore').textContent = `${correct}/30`;
            document.getElementById('finalPercentage').textContent = `${percentage}%`;
            document.getElementById('resultMessage').textContent = message;
            document.getElementById('breakdownCorrect').textContent = correct;
            document.getElementById('breakdownWrong').textContent = 30 - correct;
            
            document.getElementById('examContent').style.display = 'none';
            document.getElementById('resultsScreen').classList.add('show');
        }

        function restartExam() {
            currentQuestionIndex = 0;
            answers = {};
            correct = 0;
            document.getElementById('examContent').style.display = 'block';
            document.getElementById('resultsScreen').classList.remove('show');
            shuffledQuestions = shuffleArray(allQuestions);
            renderQuestion();
        }

        function viewAnswerKey() {
            let html = '';
            allQuestions.forEach(q => {
                const correctLetter = String.fromCharCode(65 + q.correct);
                html += `
                    <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #eee; font-size: 13px;">
                        <strong>Q${q.num}:</strong> ${q.text}<br>
                        <span style="color: #4caf50; font-weight: 600;">✓ Answer: ${correctLetter}</span>
                    </div>
                `;
            });
            document.getElementById('answerKeyContent').innerHTML = html;
            document.getElementById('answerKeyModal').classList.add('show');
        }

        function closeAnswerKey() {
            document.getElementById('answerKeyModal').classList.remove('show');
        }

        window.onload = initExam;
