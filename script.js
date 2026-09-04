
         const allQuestions = [
            { num: 1, text: "Which of the following is an abiotic component of the environment?", options: ["Lion", "Grass", "Water", "Bacteria"], correct: 2, explanation: "Water is a non-living (abiotic) component. Lion, grass, and bacteria are living (biotic) components." },
            { num: 2, text: "What is a biotic component?", options: ["Soil", "Temperature", "All living organisms", "Air"], correct: 2, explanation: "Biotic components are all living things in an ecosystem - plants, animals, microorganisms." },
            { num: 3, text: "Which is NOT an abiotic factor?", options: ["Sunlight", "Oxygen", "Fox", "Humidity"], correct: 2, explanation: "A fox is a living organism (biotic). Sunlight, oxygen, and humidity are non-living (abiotic) factors." },
            { num: 4, text: "Name a biotic factor that depends on an abiotic factor for survival", options: ["Plant depends on soil", "Rock depends on air", "Sand depends on water", "Stone depends on light"], correct: 0, explanation: "Plants (biotic) depend on soil (abiotic) for nutrients and anchorage. This shows interdependence." },
            { num: 5, text: "What is interdependence in an ecosystem?", options: ["Living things fight each other", "Living and non-living things depend on each other", "Only plants need water", "Animals eat rocks"], correct: 1, explanation: "Interdependence means living organisms (biotic) and non-living things (abiotic) need each other to survive." },
            { num: 6, text: "In a food chain, which organism is the producer?", options: ["Herbivore", "Carnivore", "Green plant", "Decomposer"], correct: 2, explanation: "Producers are green plants that make their own food through photosynthesis." },
            { num: 7, text: "What is the correct order in a simple food chain?", options: ["Carnivore → Plant → Herbivore", "Plant → Herbivore → Carnivore", "Carnivore → Herbivore → Plant", "Decomposer → Plant → Herbivore"], correct: 1, explanation: "Food chain flows from producer (plant) → primary consumer (herbivore) → secondary consumer (carnivore)." },
            { num: 8, text: "Which organism feeds on dead organic matter?", options: ["Herbivore", "Carnivore", "Omnivore", "Decomposer"], correct: 3, explanation: "Decomposers (bacteria, fungi) break down dead organisms and return nutrients to soil." },
            { num: 9, text: "What is a food web?", options: ["One path of food", "Multiple interconnected food chains", "Only herbivores eating plants", "Dead organisms"], correct: 1, explanation: "A food web shows how different food chains overlap and interconnect in an ecosystem." },
            { num: 10, text: "A herbivore in a food chain is a?", options: ["Primary consumer", "Secondary consumer", "Producer", "Decomposer"], correct: 0, explanation: "Herbivores are primary consumers - they eat plants (producers) and are eaten by carnivores." },
            { num: 11, text: "In a food chain, where does energy originate?", options: ["From the soil", "From the sun", "From decomposers", "From water"], correct: 1, explanation: "The sun is the ultimate energy source. Plants capture solar energy through photosynthesis." },
            { num: 12, text: "How does energy flow in an ecosystem?", options: ["Sun → Plants → Herbivores → Carnivores", "Carnivores → Herbivores → Plants → Sun", "Plants → Sun → Herbivores → Carnivores", "Decomposers → Carnivores → Plants"], correct: 0, explanation: "Energy flows from sun → producers (plants) → consumers (herbivores & carnivores)." },
            { num: 13, text: "What percentage of energy is transferred between trophic levels?", options: ["90%", "50%", "10%", "100%"], correct: 2, explanation: "Only about 10% of energy is transferred between each trophic level; 90% is lost as heat." },
            { num: 14, text: "Which organism is both a consumer and a decomposer role-wise?", options: ["Plant", "Herbivore", "Fungus", "Leaf"], correct: 2, explanation: "Fungi break down dead organic matter (decompose) and some feed on living organisms (consume)." },
            { num: 15, text: "In the food chain: Grass → Grasshopper → Bird → Hawk. What is the hawk?", options: ["Primary consumer", "Producer", "Tertiary consumer", "Decomposer"], correct: 2, explanation: "The hawk is a tertiary (top) consumer - it's at the end of this food chain." },
            { num: 16, text: "What do plants need from the abiotic environment to survive?", options: ["Other animals", "Rocks", "Water, sunlight, and soil nutrients", "Insects"], correct: 2, explanation: "Plants need water (abiotic), sunlight (abiotic), and soil nutrients (abiotic) to grow." },
            { num: 17, text: "Which is an example of a food chain in nature?", options: ["Fish ← Algae ← Water", "Algae → Fish → Pelican", "Water → Fish → Algae", "Pelican → Fish → Water"], correct: 1, explanation: "Correct food chain: Algae (producer) → Fish (consumer) → Pelican (consumer)." },
            { num: 18, text: "What role do decomposers play in energy flow?", options: ["Add energy to ecosystem", "Return nutrients to soil for reuse", "Consume all herbivores", "Produce light"], correct: 1, explanation: "Decomposers break down dead organisms and return nutrients to the soil for plants to use." },
            { num: 19, text: "If there were no decomposers in an ecosystem, what would happen?", options: ["More plants would grow", "Dead organisms would pile up and nutrients wouldn't recycle", "Animals would live longer", "More energy would flow"], correct: 1, explanation: "Without decomposers, dead matter wouldn't break down, and the nutrient cycle would stop." },
            { num: 20, text: "A carnivore that eats only herbivores is a?", options: ["Primary consumer", "Secondary consumer", "Producer", "Omnivore"], correct: 1, explanation: "A carnivore eating herbivores is a secondary consumer (at the 3rd trophic level)." },
            { num: 21, text: "Which statement best describes interdependence?", options: ["Living things don't need each other", "All organisms are completely independent", "Organisms depend on living and non-living components", "Only plants need water"], correct: 2, explanation: "Interdependence means all living and non-living things in an ecosystem depend on each other." },
            { num: 22, text: "In a pond ecosystem, plankton are?", options: ["Abiotic factors", "Decomposers", "Producers and primary consumers", "Rocks and sand"], correct: 2, explanation: "Phytoplankton are producers, and zooplankton are primary consumers in aquatic ecosystems." },
            { num: 23, text: "How many trophic levels are in the food chain: Plant → Mouse → Snake → Owl?", options: ["2", "3", "4", "5"], correct: 2, explanation: "4 trophic levels: Producer (Plant), Primary Consumer (Mouse), Secondary (Snake), Tertiary (Owl)." },
            { num: 24, text: "Which abiotic factor is most important for photosynthesis?", options: ["Wind", "Sunlight", "Rock", "Decomposition"], correct: 1, explanation: "Sunlight is essential for photosynthesis - it provides the energy plants use to make food." },
            { num: 25, text: "What happens to energy as it moves up the food chain?", options: ["It increases", "It stays the same", "It decreases", "It stops"], correct: 2, explanation: "Energy decreases at each trophic level because organisms use energy for life processes." },
            { num: 26, text: "An omnivore is an organism that eats?", options: ["Only plants", "Only meat", "Both plants and meat", "Only decomposers"], correct: 2, explanation: "Omnivores eat both plants (herbivore role) and meat (carnivore role). Humans are omnivores." },
            { num: 27, text: "In a food web, if all the plants died, what would happen?", options: ["Herbivores would survive", "All consumers would eventually starve", "Carnivores would increase", "Decomposers would multiply forever"], correct: 1, explanation: "Without producers (plants), primary consumers have no food, and all higher consumers would starve." },
            { num: 28, text: "Which is the most stable ecosystem?", options: ["With only 1 species", "With many interconnected food chains (food web)", "With no decomposers", "With only herbivores"], correct: 1, explanation: "An ecosystem with diverse food webs is more stable - if one species dies, others can survive." },
            { num: 29, text: "What is the main difference between a food chain and food web?", options: ["Food web has only plants", "Food chain is linear, food web shows interconnections", "They are the same thing", "Food web only has carnivores"], correct: 1, explanation: "Food chain shows one path; food web shows multiple interconnected food chains in an ecosystem." },
            { num: 30, text: "In terms of energy, which trophic level has the most available energy?", options: ["Carnivores", "Herbivores", "Producers (plants)", "Decomposers"], correct: 2, explanation: "Producers (plants) have the most energy because they capture solar energy directly from the sun." }
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
