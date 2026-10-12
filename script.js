const allQuestions = [
    // ===== BUSINESS STUDIES (1-30) =====
    { num: 1, text: "A receptionist is called an 'ambassador' of the company mainly because he/she:", options: ["keeps the financial records of the company", "gives the first impression of the organisation to visitors", "signs documents on behalf of the managing director", "delivers letters to other organisations"], correct: 1, explanation: "A receptionist is an ambassador of the company because he/she gives the first impression of the organisation and receives visitors and their messages." },
    { num: 2, text: "Which of these correctly describes a reception office?", options: ["An office at the back of the organisation where mails are sorted", "An office at the entrance where visitors are received, with a table that has one or more telephones", "An office where only telephone calls are made and visitors are not received", "An office inside the manager's room with only a computer"], correct: 1, explanation: "A reception office is where visitors are received. It is situated at the entrance, and the reception table must have one or more telephones to receive and make calls." },
    { num: 3, text: "The duties of a receptionist can be broadly divided into:", options: ["typing letters and keeping accounts", "receiving callers and delivering goods", "receiving callers and handling telephone duties", "handling telephone duties and posting mails"], correct: 2, explanation: "The two broad duties are receiving callers (visitors) and handling telephone duties." },
    { num: 4, text: "Which of the following is NOT a document handled by a receptionist?", options: ["Visitor's book", "Telephone directory", "Invoice", "Diary"], correct: 2, explanation: "An invoice is a sales document. The visitor's book, telephone directory and diary are handled by a receptionist." },
    { num: 5, text: "Which pair is correctly matched?", options: ["Diary: a list of names and telephone numbers of a particular area", "Telephone directory: records daily events for future use", "Business card: records telephone messages", "Telephone pad: a form used for recording telephone messages"], correct: 3, explanation: "A telephone pad records telephone messages. A telephone directory lists names, numbers and addresses, and a diary records daily events." },
    { num: 6, text: "Which statement about the visitor's request form is TRUE?", options: ["It is used by visitors who want to see an official in an organisation", "It shows the amount spent on postage stamps", "It is a book containing telephone numbers of an area", "It is issued to correct an overcharge"], correct: 0, explanation: "The visitor's request form is used by visitors or clients who want to see an official. It contains the visitor's name, whom they wish to see and the purpose of the visit." },
    { num: 7, text: "Which of these is NOT a quality of a good receptionist?", options: ["Being punctual to work", "Being computer literate", "Being polite and friendly with visitors", "Rushing to leave work before closing time"], correct: 3, explanation: "A good receptionist must be punctual and must NOT hurry to leave work." },
    { num: 8, text: "A visitor comes to see an officer who is not around. What should the receptionist do?", options: ["Ask the visitor to go away without any note", "Take the message down from the visitor", "Direct the visitor to any officer in the building", "Ask the visitor to wait outside the organisation"], correct: 1, explanation: "Where the officer is not around, the receptionist takes the message down from the visitor." },
    { num: 9, text: "Mails can come into an organisation by hand or by post. Which statement about post is correct?", options: ["It can be through the Post Office Box (POB) and Private Mail Bag (PMB)", "It can only be through the visitor's book", "It is through the dispatch book only", "It is through the Post Office Box (POB) and Private Memo Board (PMB)"], correct: 0, explanation: "Mails come into an organisation by hand or by post, through the Post Office Box (POB) and Private Mail Bag (PMB)." },
    { num: 10, text: "The head of the accounts unit writes a memo to the head of the sales unit in the same organisation. This memo is an example of:", options: ["an incoming mail", "an outgoing mail", "an internal mail", "a dispatched mail"], correct: 2, explanation: "Internal mails are written letters passed within an organisation, directed to another individual or unit head for action, e.g. an internal memo." },
    { num: 11, text: "Which correspondence record would an organisation use to know the total number of mails received during a period of time?", options: ["Outward book", "Inward book", "Postage book", "Dispatch book"], correct: 1, explanation: "The inward book records all mails and letters received by an organisation and gives details about the sender." },
    { num: 12, text: "A letter is delivered by hand to the organisation it was addressed to. Where is it recorded?", options: ["Inward book", "Outward book", "Postage book", "Dispatch book"], correct: 3, explanation: "The dispatch book records letters that are delivered by hand to the person or organisation they were addressed to." },
    { num: 13, text: "Which correspondence record gives details of the sender and receiver of a mail and shows the date and time it was dispatched by the organisation?", options: ["Inward book", "Postage book", "Outward book", "Telephone pad"], correct: 2, explanation: "The outward book records details of mails and letters sent out by an organisation, including the date and time of dispatch." },
    { num: 14, text: "Which book shows that a letter has been posted and the amount spent on postage stamps?", options: ["Postage book", "Outward book", "Inward book", "Dispatch book"], correct: 0, explanation: "The postage book shows that a letter or mail has been posted and the amount spent on postage stamps." },
    { num: 15, text: "Documents used in an office for business transactions are basically of two types, which are:", options: ["Sales documents and purchases documents", "Inward documents and outward documents", "Incoming documents and outgoing documents", "Invoices and receipts"], correct: 0, explanation: "Office documents are basically sales documents and purchases documents." },
    { num: 16, text: "Which statement about a price list and a catalogue is correct?", options: ["A catalogue indicates only the price of each product", "A price list is a booklet that describes all the goods a buyer wants", "A price list shows the price of each product offered for sale, while a catalogue is a booklet with descriptive details of goods in stock", "Both are issued to correct an overcharge"], correct: 2, explanation: "A price list indicates the price at which each product is offered for sale, while a catalogue is a booklet with descriptive details of the goods a seller has in stock." },
    { num: 17, text: "When goods are to be delivered by road, which document is prepared and given to the van driver?", options: ["Receipt", "Delivery note", "Debit note", "Quotation"], correct: 1, explanation: "A delivery note is prepared and given to the van driver who will deliver the goods." },
    { num: 18, text: "A seller finds that a buyer was undercharged. Which document should the seller issue to correct this?", options: ["Credit note", "Receipt", "Requisition form", "Debit note"], correct: 3, explanation: "A debit note is issued by the seller to the buyer when the buyer is undercharged." },
    { num: 19, text: "A buyer returns some goods to the seller. Which document does the seller issue?", options: ["Debit note", "Quotation", "Credit note", "Order form"], correct: 2, explanation: "A credit note is issued when the buyer returns goods or is overcharged, to correct an overcharge." },
    { num: 20, text: "Which document is issued by the seller to the buyer as evidence that payment has been made for goods supplied?", options: ["Invoice", "Receipt", "Delivery note", "Quotation"], correct: 1, explanation: "A receipt is issued by the seller to show that payment has been made. An invoice only summarises the transaction." },
    { num: 21, text: "Which purchases document is prepared to request for the needs of a department and is meant for internal use only?", options: ["Letter of enquiry", "Order form", "Requisition form", "Quotation"], correct: 2, explanation: "A requisition form is used to request for the needs of a department and is meant for internal use. A letter of enquiry is sent by the buyer to the seller." },
    { num: 22, text: "Which statement describes the barter system?", options: ["Goods are exchanged for goods and services for services without the use of money", "Goods are bought and sold for money", "Goods are bought from one country and sold to another", "Goods are bought in large quantity and resold in small quantity"], correct: 0, explanation: "In the olden days, trade was carried out by barter, where goods were exchanged for goods and services for services without money." },
    { num: 23, text: "Which of the following is NOT an importance of trade?", options: ["It promotes national development", "It provides job opportunities for people of different categories", "It brings two or more countries together through international trade", "It lowers the standard of living of people in a nation"], correct: 3, explanation: "Trade IMPROVES the standard of living of people in a nation. It does not lower it." },
    { num: 24, text: "A trader buys goods in large quantity from the manufacturer and resells in small quantity to the retailer. He is a:", options: ["retailer", "wholesaler", "consumer", "exporter"], correct: 1, explanation: "Wholesale trade is buying goods in large quantity from the manufacturer and reselling in small quantity to the retailer." },
    { num: 25, text: "A retailer buys goods in small quantity from the wholesaler and resells in units to the final consumer. Retailers and wholesalers are both referred to as:", options: ["manufacturers", "middlemen", "importers", "final consumers"], correct: 1, explanation: "Both wholesalers and retailers are referred to as middlemen." },
    { num: 26, text: "A trader moves goods from Ibadan to Lagos, while another sells goods from Nigeria to Ghana. These are examples of ___ and ___ respectively.", options: ["foreign trade, home trade", "wholesale trade, retail trade", "home trade, foreign trade", "import trade, export trade"], correct: 2, explanation: "Goods moved within a country (Ibadan to Lagos) are home trade. Trade between two or more countries is foreign trade." },
    { num: 27, text: "Nigeria imported vehicles and later sold the vehicles to Ghana. This is an example of:", options: ["export trade", "import trade", "entrepot trade", "retail trade"], correct: 2, explanation: "Entrepot is the reselling of imported goods to other countries." },
    { num: 28, text: "Which of the following is NOT an aid to trade?", options: ["Banking", "Advertising", "Tourism", "Barter"], correct: 3, explanation: "Aids to trade are banking, insurance, advertising, warehousing, transportation, communication and tourism. Barter is the old way of trading without money." },
    { num: 29, text: "A trader wants protection against risk or loss in business and also needs a loan or overdraft. Which aids to trade will help him?", options: ["Insurance and banking", "Warehousing and transportation", "Advertising and tourism", "Communication and warehousing"], correct: 0, explanation: "Insurance protects against risk/loss in business, while banks give loans, overdrafts and financial advice." },
    { num: 30, text: "Which aid to trade keeps goods safe until the buyer needs them, and which one moves goods from one place to another?", options: ["Transportation, warehousing", "Warehousing, transportation", "Advertising, communication", "Banking, insurance"], correct: 1, explanation: "Warehousing keeps goods safe until needed by the customer or buyer. Transportation is the movement of goods and people by land, water, air and pipeline." },

    // ===== BASIC SCIENCE (31-60) =====
    { num: 31, text: "Which is the correct order of organisation in the body, from the simplest to the most complex?", options: ["Cell, tissue, organ, organ system", "Tissue, cell, organ, organ system", "Cell, organ, tissue, organ system", "Organ, tissue, cell, organ system"], correct: 0, explanation: "Cells group into tissues, tissues into organs, and functionally related organs form organ systems." },
    { num: 32, text: "Which list contains ONLY organs?", options: ["Muscle, blood, heart, lung", "Blood, muscle, egg cell, skin", "Heart, kidney, lung, skin", "Digestive, circulatory, skeletal, heart"], correct: 2, explanation: "Heart, kidney, lung, skin, eye and ear are organs. Muscles and blood are tissues, while digestive, circulatory and skeletal are organ systems." },
    { num: 33, text: "Which statement is correct about cells?", options: ["Human beings are unicellular while amoeba is multicellular", "Red blood cells are examples of organs", "Cells are only found in animals", "Amoeba is unicellular while human beings are multicellular"], correct: 3, explanation: "Cells are the basic building blocks of all plants and animals. Amoeba exists as a single cell, while human beings are made of many cells." },
    { num: 34, text: "The skeletal system is the system of the body consisting of:", options: ["bones, muscles, skin and blood", "bones, cartilage, ligaments and tendons", "cartilage, nerves, lungs and tendons", "bones, joints and muscles only"], correct: 1, explanation: "The skeletal system consists of bones, cartilage, ligaments and tendons. It gives the body shape and rigidity." },
    { num: 35, text: "Bone is a tissue made of dense protein fibres called collagen, living bone cells and minerals. Which minerals are these?", options: ["Iron and potassium", "Calcium phosphate and calcium carbonate", "Sodium chloride and calcium sulphate", "Magnesium and calcium nitrate"], correct: 1, explanation: "Bone contains collagen, living bone cells, and minerals such as calcium phosphate and calcium carbonate. An adult has almost 206 bones." },
    { num: 36, text: "Which statement about cartilage is correct?", options: ["It is a hard tissue made only of calcium", "It is a smooth, tough and flexible protein tissue found in the nose and external ear", "It is a fluid that supports soft-bodied animals", "It joins muscles to bones"], correct: 1, explanation: "Cartilage is a smooth, tough and flexible protein tissue that forms part of the human skeleton. It is found in the extended part of the nose and the external ear." },
    { num: 37, text: "Which group of animals has an exoskeleton?", options: ["Human beings, birds and lizards", "Fishes, mammals and snails", "Snail, grasshopper and shrimp", "Birds, ants and fishes"], correct: 2, explanation: "Shells of snails, grasshoppers, cockroaches, ants, lobsters and shrimps are examples of exoskeletons." },
    { num: 38, text: "Which skeleton is also called the fluid skeleton and is possessed by soft-bodied animals?", options: ["Exoskeleton", "Endoskeleton", "Appendicular skeleton", "Hydrostatic skeleton"], correct: 3, explanation: "The hydrostatic skeleton is the fluid skeleton. The fluid exerts pressure against the body wall, giving shape and support and enabling movement." },
    { num: 39, text: "An endoskeleton is found inside the body and is made up of bones and cartilages. Which group of animals has it?", options: ["Lobsters, shrimps and snails", "Human beings, birds, fishes and lizards", "Ants, cockroaches and birds", "Lizards, ants and human beings"], correct: 1, explanation: "Mammals like human beings, birds, fishes, lizards etc. have endoskeletons." },
    { num: 40, text: "The two types of endoskeleton are:", options: ["axial (main) skeleton and appendicular (limb) skeleton", "exoskeleton and hydrostatic skeleton", "movable and immovable skeleton", "voluntary and involuntary skeleton"], correct: 0, explanation: "The endoskeleton is made up of the axial or main skeleton and the appendicular or limb skeleton." },
    { num: 41, text: "Which of these is NOT a function of the skeletal system?", options: ["It protects delicate and vital organs such as the brain, heart and lungs", "It helps in the production of red blood cells", "It aids movement and helps in breathing", "It digests the food we eat"], correct: 3, explanation: "The skeleton gives shape, supports weight and organs, protects vital organs, aids movement, helps in breathing and produces red blood cells. It does not digest food." },
    { num: 42, text: "A joint is best defined as:", options: ["a tissue that connects muscles to bones", "a point in the body where two or more bones meet", "a bundle of elastic substances that supports movement", "a smooth, tough tissue found in the ear"], correct: 1, explanation: "A joint is a point in an animal's body where two or more bones meet." },
    { num: 43, text: "Which of these is a function of joints?", options: ["They produce red blood cells", "They pump blood round the body", "They help us move from place to place and turn our bodies", "They absorb digested food"], correct: 2, explanation: "Joints help us move from place to place, twist and turn our bodies, and hold objects easily without our fingers slipping." },
    { num: 44, text: "Which of the following is NOT a type of movable joint?", options: ["Ball and socket joint", "Hinge joint", "Gliding or sliding joint", "Suture joint"], correct: 3, explanation: "The four movable joints are ball and socket, hinge, gliding or sliding, and pivot. The suture joint is immovable." },
    { num: 45, text: "The suture joint found in the skull is an example of:", options: ["a movable ball and socket joint", "an immovable joint", "a movable hinge joint", "a gliding joint"], correct: 1, explanation: "Immovable joints cannot move. The bones that make up the skull and pelvis are examples, and the suture joint is found in the skull." },
    { num: 46, text: "Muscles are attached to bones by means of:", options: ["cartilage", "tendons", "collagen", "joints"], correct: 1, explanation: "Muscles are attached to bones by tendons. They contract (shorten) and relax to pull the bones and produce movement." },
    { num: 47, text: "Gold decides to raise his hand in class, while his heart keeps beating without him thinking about it. Which muscles are involved?", options: ["Raising the hand: involuntary; heartbeat: voluntary", "Raising the hand: skeletal (voluntary); heartbeat: cardiac (involuntary)", "Raising the hand: smooth; heartbeat: skeletal", "Both are voluntary muscles"], correct: 1, explanation: "Voluntary muscles (e.g. skeletal) move when we wish. Involuntary muscles (smooth and cardiac) move on their own with no control from us." },
    { num: 48, text: "Which pair are involuntary muscles?", options: ["Skeletal and smooth muscles", "Skeletal and cardiac muscles", "Biceps and triceps", "Smooth and cardiac muscles"], correct: 3, explanation: "Involuntary muscles move of their own accord. Smooth and cardiac muscles are examples." },
    { num: 49, text: "Biceps and triceps are examples of muscles found in:", options: ["the arm", "the leg", "the heart", "the lungs"], correct: 0, explanation: "The biceps and triceps of the arm are an example of muscles that work in pairs to produce movement." },
    { num: 50, text: "Inhalation is also called ___ while exhalation is also called ___.", options: ["expiration, inspiration", "respiration, breathing", "inspiration, expiration", "aerobic, anaerobic"], correct: 2, explanation: "Inhalation (inspiration) is taking in oxygen. Exhalation (expiration) is bringing out carbon dioxide." },
    { num: 51, text: "Which statement correctly differentiates breathing from respiration?", options: ["Breathing is taking in oxygen and giving out carbon dioxide, while respiration is the release of energy from digested food (glucose) with oxygen", "Breathing is the release of energy from food, while respiration is taking in air through the nose", "Breathing and respiration both mean releasing energy from glucose", "Respiration only takes place in the lungs while breathing takes place in the cells"], correct: 0, explanation: "Breathing is the process of taking in oxygen and giving out carbon dioxide. Respiration is the process by which digested food (glucose) combines with oxygen to release energy." },
    { num: 52, text: "Which equation represents aerobic respiration?", options: ["Glucose → Alcohol + Carbon dioxide + Energy", "Carbon dioxide + Water → Glucose + Oxygen", "Glucose + Oxygen → Carbon dioxide + Water + Energy", "Glucose + Alcohol → Oxygen + Energy"], correct: 2, explanation: "Aerobic (cellular) respiration requires oxygen: Glucose + Oxygen → Carbon dioxide + Water + Energy." },
    { num: 53, text: "According to the textbook, the products of anaerobic respiration are:", options: ["water, carbon dioxide and energy", "alcohol, oxygen and energy", "alcohol, carbon dioxide and energy", "water, alcohol and energy"], correct: 2, explanation: "Anaerobic respiration releases energy from food without oxygen: Glucose → Alcohol + Carbon dioxide + Energy." },
    { num: 54, text: "According to the table of air composition, which statement is correct?", options: ["Oxygen is higher in exhaled air than in inhaled air", "Carbon dioxide is 0.04% in exhaled air", "Water vapour is 0.06% in inhaled air", "Nitrogen is 79.00% in both inhaled and exhaled air"], correct: 3, explanation: "Nitrogen stays 79.00% in both. Oxygen falls from 20.96% to 16.02%, carbon dioxide rises from 0.04% to 4.38%, and water vapour is trace in inhaled air and 0.06% in exhaled air." },
    { num: 55, text: "By how much does the percentage of carbon dioxide increase from inhaled air (0.04%) to exhaled air (4.38%)?", options: ["4.34%", "4.42%", "4.38%", "0.04%"], correct: 0, explanation: "4.38% − 0.04% = 4.34%." },
    { num: 56, text: "Why do mountain climbers need extra oxygen as they climb higher?", options: ["They exhale less carbon dioxide at higher places", "The higher they go, the lesser the amount of oxygen in the atmosphere", "The higher they go, the more oxygen is in the atmosphere", "They need to burn less food at higher places"], correct: 1, explanation: "The higher the climbers go, the lesser the amount of oxygen in the atmosphere." },
    { num: 57, text: "If the amount of oxygen in a room is not enough, it results in:", options: ["hay fever", "silicosis", "suffocation", "tuberculosis"], correct: 2, explanation: "The absence of oxygen in a room can lead to fainting and death. If it is not enough, it results in suffocation." },
    { num: 58, text: "Which respiratory disease makes the tubes carrying air in and out of the lungs swell up and fill with thick mucus?", options: ["Asthma", "Pneumonia", "Tuberculosis", "Silicosis"], correct: 0, explanation: "Asthma is a breathing disease that makes the tubes carrying air in and out of the lungs swell up and fill with thick mucus." },
    { num: 59, text: "A quarry worker breathes in dust containing silica for many years and develops fibrous tissue in the lungs and chronic shortness of breath. Which condition does he have?", options: ["Pneumonia", "SARS", "Hay fever", "Silicosis"], correct: 3, explanation: "Silicosis is caused by prolonged inhaling of dust containing silica, with fibrous tissue developing in the lungs and chronic shortness of breath." },
    { num: 60, text: "Which respiratory disease is correctly matched with its description?", options: ["Pneumonia: the alveoli are filled up with fluid or pus", "Tuberculosis: a contagious illness caused by a corona virus", "SARS: a bacterial disease that causes tubercles in the lungs", "Hay fever: caused by prolonged inhaling of dust containing silica"], correct: 0, explanation: "Pneumonia affects the alveoli, which fill with fluid or pus. TB is bacterial, SARS is caused by a corona virus, and hay fever is an allergic reaction." }
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
