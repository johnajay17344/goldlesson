
        const allQuestions = [
            { num: 1, text: "Express 5,000,000 in standard form", options: ["5 × 10⁶", "5 × 10⁷", "50 × 10⁵", "0.5 × 10⁷"], correct: 0, explanation: "5,000,000 = 5 × 10⁶ (standard form has one non-zero digit before decimal)" },
            { num: 2, text: "What is 3.5 × 10⁴ in ordinary form?", options: ["35,000", "350,000", "3,500", "0.00035"], correct: 0, explanation: "3.5 × 10⁴ = 3.5 × 10,000 = 35,000" },
            { num: 3, text: "Which number is in standard form?", options: ["25 × 10³", "2.5 × 10³", "0.25 × 10⁴", "250 × 10²"], correct: 1, explanation: "Standard form: a × 10ⁿ where 1 ≤ a < 10. Only 2.5 × 10³ fits this rule." },
            { num: 4, text: "Express 0.000045 in standard form", options: ["4.5 × 10⁻⁵", "4.5 × 10⁻⁴", "4.5 × 10⁵", "45 × 10⁻⁶"], correct: 0, explanation: "0.000045 = 4.5 × 10⁻⁵ (move decimal 5 places right, so power is -5)" },
            { num: 5, text: "What is 7.2 × 10⁻³ in decimal form?", options: ["0.0072", "0.00072", "7,200", "72,000"], correct: 0, explanation: "7.2 × 10⁻³ = 7.2 ÷ 1000 = 0.0072" },
            { num: 6, text: "Which represents the largest number?", options: ["2 × 10³", "5 × 10²", "8 × 10¹", "1 × 10⁴"], correct: 3, explanation: "1 × 10⁴ = 10,000 (largest). Compare: 2×10³=2000, 5×10²=500, 8×10¹=80" },
            { num: 7, text: "Express 123,000 in standard form", options: ["1.23 × 10⁵", "12.3 × 10⁴", "0.123 × 10⁶", "1.23 × 10⁴"], correct: 0, explanation: "123,000 = 1.23 × 10⁵ (move decimal 5 places left)" },
            { num: 8, text: "What is the place value of 7 in 2,745,000?", options: ["ten thousands", "hundred thousands", "millions", "thousands"], correct: 1, explanation: "In 2,745,000: 7 is in the hundred thousands place (position after 7 = 45,000)" },
            { num: 9, text: "Add: 3.45 + 2.67", options: ["6.12", "5.98", "6.02", "6.10"], correct: 0, explanation: "3.45 + 2.67 = 6.12 (align decimals and add)" },
            { num: 10, text: "Subtract: 8.5 - 3.25", options: ["4.25", "5.25", "5.35", "4.15"], correct: 1, explanation: "8.5 - 3.25 = 8.50 - 3.25 = 5.25" },
            { num: 11, text: "Express 45,000,000 in standard form", options: ["4.5 × 10⁷", "45 × 10⁶", "0.45 × 10⁸", "4.5 × 10⁶"], correct: 0, explanation: "45,000,000 = 4.5 × 10⁷ (move decimal 7 places)" },
            { num: 12, text: "Which decimal is equal to 3/4?", options: ["0.75", "0.34", "0.4", "0.25"], correct: 0, explanation: "3/4 = 3 ÷ 4 = 0.75" },
            { num: 13, text: "What is 2 × 10³ + 3 × 10²?", options: ["500", "2,300", "203", "23"], correct: 1, explanation: "2 × 10³ = 2,000 and 3 × 10² = 300, so 2,000 + 300 = 2,300" },
            { num: 14, text: "Convert 0.08 to a fraction", options: ["8/100", "8/10", "80/100", "8/1000"], correct: 0, explanation: "0.08 = 8/100 (two decimal places = hundredths)" },
            { num: 15, text: "Arrange in ascending order: 0.4, 0.04, 0.404, 0.044", options: ["0.04, 0.044, 0.4, 0.404", "0.04, 0.044, 0.404, 0.4", "0.044, 0.04, 0.4, 0.404", "0.4, 0.404, 0.04, 0.044"], correct: 0, explanation: "0.04 < 0.044 < 0.4 < 0.404 (compare by place value)" },
            { num: 16, text: "What is 6.3 × 2.5?", options: ["15.75", "15.5", "16.75", "14.75"], correct: 0, explanation: "6.3 × 2.5 = 63 × 25 ÷ 100 = 1575 ÷ 100 = 15.75" },
            { num: 17, text: "Express 0.000008 in standard form", options: ["8 × 10⁻⁶", "8 × 10⁻⁵", "0.8 × 10⁻⁵", "8 × 10⁶"], correct: 0, explanation: "0.000008 = 8 × 10⁻⁶ (move decimal 6 places right)" },
            { num: 18, text: "What is the standard form of 912,000?", options: ["9.12 × 10⁵", "91.2 × 10⁴", "0.912 × 10⁶", "9.12 × 10⁴"], correct: 0, explanation: "912,000 = 9.12 × 10⁵ (move decimal 5 places)" },
            { num: 19, text: "Divide: 12.6 ÷ 3", options: ["4.2", "3.8", "4.8", "3.5"], correct: 0, explanation: "12.6 ÷ 3 = 4.2" },
            { num: 20, text: "Which is NOT in standard form?", options: ["2.5 × 10³", "3.0 × 10⁴", "12.5 × 10²", "4.7 × 10⁻²"], correct: 2, explanation: "12.5 × 10² is NOT standard form (12.5 is not between 1 and 10)" },
            { num: 21, text: "What is 5.4 × 10² in ordinary form?", options: ["540", "5,400", "54", "0.054"], correct: 0, explanation: "5.4 × 10² = 5.4 × 100 = 540" },
            { num: 22, text: "Round 7.456 to 2 decimal places", options: ["7.45", "7.46", "7.5", "7.4"], correct: 1, explanation: "7.456 rounded to 2 d.p.: look at 3rd decimal (6), which is ≥5, so round up to 7.46" },
            { num: 23, text: "Express 2,340,000 in standard form", options: ["2.34 × 10⁶", "23.4 × 10⁵", "0.234 × 10⁷", "2.34 × 10⁵"], correct: 0, explanation: "2,340,000 = 2.34 × 10⁶" },
            { num: 24, text: "What is 3 × 10⁻² + 4 × 10⁻¹?", options: ["0.43", "0.034", "0.073", "4.3"], correct: 0, explanation: "3 × 10⁻² = 0.03 and 4 × 10⁻¹ = 0.4, so 0.03 + 0.4 = 0.43" },
            { num: 25, text: "Which number is the smallest?", options: ["3.4 × 10⁻³", "3.4 × 10⁻²", "3.4 × 10⁻¹", "3.4 × 10⁰"], correct: 0, explanation: "3.4 × 10⁻³ = 0.0034 (most negative power = smallest)" },
            { num: 26, text: "Convert 9/20 to decimal form", options: ["0.45", "0.5", "0.9", "0.2"], correct: 0, explanation: "9/20 = 9 ÷ 20 = 0.45" },
            { num: 27, text: "What is 15.8 - 9.63?", options: ["6.17", "6.27", "5.17", "7.17"], correct: 0, explanation: "15.8 - 9.63 = 15.80 - 9.63 = 6.17" },
            { num: 28, text: "Express 80,050 in standard form", options: ["8.005 × 10⁴", "8.005 × 10³", "80.05 × 10³", "8.05 × 10⁴"], correct: 0, explanation: "80,050 = 8.005 × 10⁴" },
            { num: 29, text: "Multiply: 0.6 × 0.7", options: ["0.42", "0.48", "0.52", "0.38"], correct: 0, explanation: "0.6 × 0.7 = 6 × 7 ÷ 100 = 42 ÷ 100 = 0.42" },
            { num: 30, text: "What is the value of 1.5 × 10⁻¹?", options: ["0.15", "15", "0.015", "150"], correct: 0, explanation: "1.5 × 10⁻¹ = 1.5 ÷ 10 = 0.15" },
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
