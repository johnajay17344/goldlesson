
const allQuestions = [
    { num: 1, text: "(-3) x (-4) = ?", options: ["12", "-12", "7", "-7"], correct: 0, explanation: "Negative x Negative = Positive. So (-3) x (-4) = 12." },
    { num: 2, text: "(-5) x 6 = ?", options: ["-30", "30", "-11", "11"], correct: 0, explanation: "Negative x Positive = Negative. So (-5) x 6 = -30." },
    { num: 3, text: "8 x (-3) = ?", options: ["-24", "24", "-11", "11"], correct: 0, explanation: "Positive x Negative = Negative. So 8 x (-3) = -24." },
    { num: 4, text: "(-2) x (-2) x (-2) = ?", options: ["-8", "8", "6", "-6"], correct: 0, explanation: "Multiplying three negative numbers gives a negative result (odd number of negatives)." },
    { num: 5, text: "(-12) ÷ (-3) = ?", options: ["4", "-4", "9", "-9"], correct: 0, explanation: "Negative ÷ Negative = Positive. So (-12) ÷ (-3) = 4." },
    { num: 6, text: "20 ÷ (-4) = ?", options: ["-5", "5", "-16", "16"], correct: 0, explanation: "Positive ÷ Negative = Negative. So 20 ÷ (-4) = -5." },
    { num: 7, text: "(-18) ÷ 6 = ?", options: ["-3", "3", "-12", "12"], correct: 0, explanation: "Negative ÷ Positive = Negative. So (-18) ÷ 6 = -3." },
    { num: 8, text: "Which of these gives a positive result?", options: ["(-3) x 4", "(-6) x (-2)", "5 x (-3)", "(-7) x 2"], correct: 1, explanation: "(-6) x (-2) = 12, positive, because negative x negative = positive." },
    { num: 9, text: "The product of two negative numbers is always?", options: ["Positive", "Negative", "Zero", "Undefined"], correct: 0, explanation: "When two negative numbers are multiplied, the result is always positive." },
    { num: 10, text: "The product of a positive and a negative number is always?", options: ["Negative", "Positive", "Zero", "Undefined"], correct: 0, explanation: "A positive number multiplied by a negative number always gives a negative result." },
    { num: 11, text: "(-9) x 0 = ?", options: ["-9", "9", "0", "Undefined"], correct: 2, explanation: "Any number multiplied by zero equals zero." },
    { num: 12, text: "Simplify: (-4) x 5 x (-2) = ?", options: ["40", "-40", "30", "-30"], correct: 0, explanation: "(-4) x 5 = -20, then (-20) x (-2) = 40 (two negatives cancel out)." },
    { num: 13, text: "(-1) x (-1) x (-1) x (-1) = ?", options: ["1", "-1", "4", "-4"], correct: 0, explanation: "Multiplying four negative numbers (an even number) gives a positive result." },
    { num: 14, text: "(-36) ÷ 9 = ?", options: ["-4", "4", "-27", "27"], correct: 0, explanation: "Negative ÷ Positive = Negative. So (-36) ÷ 9 = -4." },
    { num: 15, text: "45 ÷ (-9) = ?", options: ["-5", "5", "-36", "36"], correct: 0, explanation: "Positive ÷ Negative = Negative. So 45 ÷ (-9) = -5." },
    { num: 16, text: "(-64) ÷ (-8) = ?", options: ["8", "-8", "56", "-56"], correct: 0, explanation: "Negative ÷ Negative = Positive. So (-64) ÷ (-8) = 8." },
    { num: 17, text: "What is the quotient when a negative number is divided by a negative number?", options: ["Positive", "Negative", "Zero", "Undefined"], correct: 0, explanation: "Dividing a negative by a negative always gives a positive quotient." },
    { num: 18, text: "What is the quotient when a positive number is divided by a negative number?", options: ["Negative", "Positive", "Zero", "Undefined"], correct: 0, explanation: "Dividing a positive by a negative always gives a negative quotient." },
    { num: 19, text: "(-7) x (-8) = ?", options: ["56", "-56", "15", "-15"], correct: 0, explanation: "Negative x Negative = Positive. So (-7) x (-8) = 56." },
    { num: 20, text: "9 x (-9) = ?", options: ["-81", "81", "0", "18"], correct: 0, explanation: "Positive x Negative = Negative. So 9 x (-9) = -81." },
    { num: 21, text: "(-100) ÷ 10 = ?", options: ["-10", "10", "-90", "90"], correct: 0, explanation: "Negative ÷ Positive = Negative. So (-100) ÷ 10 = -10." },
    { num: 22, text: "(-15) ÷ (-5) = ?", options: ["3", "-3", "10", "-10"], correct: 0, explanation: "Negative ÷ Negative = Positive. So (-15) ÷ (-5) = 3." },
    { num: 23, text: "Find the value of x if 4x = -20", options: ["-5", "5", "-16", "16"], correct: 0, explanation: "Divide both sides by 4: x = -20 ÷ 4 = -5." },
    { num: 24, text: "Find the value of x if -3x = 18", options: ["-6", "6", "15", "-15"], correct: 0, explanation: "Divide both sides by -3: x = 18 ÷ (-3) = -6." },
    { num: 25, text: "If a = -6 and b = 3, find a x b", options: ["-18", "18", "-3", "3"], correct: 0, explanation: "(-6) x 3 = -18, since negative x positive = negative." },
    { num: 26, text: "If a = -12 and b = -4, find a ÷ b", options: ["3", "-3", "8", "-8"], correct: 0, explanation: "(-12) ÷ (-4) = 3, since negative ÷ negative = positive." },
    { num: 27, text: "Simplify: (-2)³ i.e. (-2) x (-2) x (-2)", options: ["-8", "8", "6", "-6"], correct: 0, explanation: "An odd power of a negative number gives a negative result: (-2)³ = -8." },
    { num: 28, text: "Simplify: (-3)² i.e. (-3) x (-3)", options: ["9", "-9", "6", "-6"], correct: 0, explanation: "An even power of a negative number gives a positive result: (-3)² = 9." },
    { num: 29, text: "Negative x Negative x Negative = ?", options: ["Negative", "Positive", "Zero", "Undefined"], correct: 0, explanation: "Multiplying three negative numbers (an odd number) gives a negative result." },
    { num: 30, text: "(-144) ÷ 12 = ?", options: ["-12", "12", "-132", "132"], correct: 0, explanation: "Negative ÷ Positive = Negative. So (-144) ÷ 12 = -12." }
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
