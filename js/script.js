const appHeight = () => document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
window.addEventListener('resize', appHeight)
appHeight() //Non riuscivo a vedere la pagina interamente su mobile a causa della UI del browser
//soluzione da StackOverflow



const DateTime = luxon.DateTime;
const {
    createApp
} = Vue




createApp({
    data() {
        return {
            contacts: [{
                id: 1,
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
                ],
            },
            {
                id: 2,
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: false,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
                ],
            },
            {
                id: 3,
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: false,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
                ],
            },
            {
                id: 4,
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
                ],
            },
            {
                id: 5,
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
                ],
            },
            {
                id: 6,
                name: 'Claudia',
                avatar: './img/avatar_5.jpg',
                visible: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
                ],
            },
            {
                id: 7,
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
                ],
            },
            {
                id: 8,
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: false,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
                ],
            }
            ],
            newMessage: {},
            textMessage: "",
            newReceived: {},
            timeNow: "",
            nameSearch: "",
            searchedContacts: [{}],
            mobilechatSelected: false,
            activeChat: 0,
            writing: false

        }
    },
    methods: {
        showChat(key) {
            this.activeChat = key;
            this.mobilechatSelected = true;
        },
        sendMessage() {
            this.timeNow = DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss');//Data formattata come quella già presente nell'array principale
            if (this.textMessage.trim().length === 0) { //Interrompe il codice se il campo di invio è vuoto (trim per non accettare una stringa di soli spazi)
                return
            }
            newMessage = {
                date: this.timeNow,
                message: this.textMessage,
                status: "sent"
            }
            responses = ["Ok", "Certo, ci sentiamo!",
                "Va bene, come vuoi",
                "Perché mi parli così?",
                "Non capisco come ragioni",
                "Non dimenticare di avvisare Clelia Fradella",
                "Non mi interessa, quando è pronto il dolce?",
                "Bastaaaa, stacca da questo cellulare",
                "Hai sbagliato numero, qui risponde Marco Acciarri",
                "Hai sbagliato numero, qui risponde Samuel Panicucci",
                "L'ignoranza è la notte dell'anima.",
                "Sii il cambiamento che vuoi vedere nel mondo.",
                "Conosci te stesso e conoscerai l'universo.",
                "La felicità non è un obiettivo, è un cammino.",
                "La verità è spesso nascosta in mezzo a una montagna di bugie.",
                "Il fallimento è solo l'opportunità di ricominciare con maggiore saggezza.",
                "Ciò che non uccide, fortifica.",
                "Il coraggio è resistenza alla paura, controllo della paura, non l'assenza della paura.",
                "Non puoi insegnare niente a un uomo. Puoi solo aiutarlo a scoprire ciò che ha dentro di sé.",
                "La mente è tutto. Ciò che pensiamo, diventiamo.",
                "Il solo modo per fare un buon lavoro è amare quello che fai.",
                "Se vuoi essere felice, sii.",
                "L'amore è la forza più potente al mondo.",
                "La vita è troppo breve per essere piccola.",
                "Non importa quanto vai lento, purché non ti fermi.",
                "La saggezza è la conquista di se stessi.",
                "L'errore non diventa verità per il fatto di diffondersi e moltiplicarsi.",
                "L'unica vera saggezza sta nella conoscenza di sé.",
                "Le cose non cambiano, cambiamo noi.",
                "Ciò che non si sa è molto più importante di ciò che si sa.",
                "La vita è un mistero da vivere, non un problema da risolvere.",
                "La libertà è la capacità di scegliere la propria schiavitù.",
                "Il vero viaggio di scoperta non consiste nella ricerca di nuovi paesaggi, ma nell'avere nuovi occhi.",
                "Tutto ha la sua bellezza, ma non tutti possono vederla.",
                "La felicità non è un posto dove arrivare, ma uno stato d'animo da coltivare.",
                "Nel momento in cui si decide di fare qualcosa, il destino si muove per incontrarti.",
                "L'essenziale è invisibile agli occhi.",
                "L'umanità è un'associazione di individui, non un insieme di pecore.",
                "Il sapere è avere un'opinione su tutto, la cultura è non averne su nulla.",
                "La bellezza salverà il mondo.",
                "La fortuna arride ai coraggiosi.",
                "Tutti i problemi del mondo nascono dall'incapacità dell'uomo di sedersi tranquillamente da solo in una stanza.",
                "L'unico modo per fare un grande lavoro è amare quello che fai.",
                "La saggezza comincia con l'accettazione della realtà.",
                "La saggezza sta nell'accettare le cose che non possiamo cambiare, avere il coraggio di cambiare quelle che possiamo e la saggezza di conoscere la differenza.",
                "L'importante non è ciò che accade, ma come reagiamo a ciò che accade.",
                "La conoscenza parla, ma la saggezza ascolta.",
                "La felicità non è nella ricerca della perfezione, ma nell'accettazione dell'imperfezione.",
                "Non esiste una strada per la felicità. La felicità è la strada.",
                "L'amore è il ponte tra te e tutto il resto.",
                "Il cambiamento è la legge della vita. E quelli che guardano solo al passato o al presente, perderanno il futuro.",
                "La verità è una strada solitaria.",
                "La felicità è un profumo che non puoi versare su gli altri senza procurartene un po' anche per te stesso.",
                "La felicità è quando ciò che pensi, ciò che dici e ciò che fai sono in armonia.",
                "L'esperienza è il miglior insegnante.",
                "L'importante non è dove si è, ma in quale direzione si sta andando."
            ]; //Array con varie risposte
            response = this.getRndInteger(0, responses.length - 1) //Genera indice casuale 
            this.contacts[this.activeChat].messages.push(newMessage); //Aggiungi newMessage
            this.textMessage = "";
            this.writing = "start";//Sta scrivendo
            setTimeout(() => { //Dopo 2 secondi, fai la stessa cosa ma con newReceived
                this.timeNow = DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss');//Aggiorna la data per la risposta
                newReceived = {
                    date: this.timeNow,
                    message: responses[response], //Aggiungi il messaggio randomico (dall'indice estratto)
                    status: "received"
                }
                this.contacts[this.activeChat].messages.push(newReceived);
                this.writing = "ended"//Ha finito di scrivere (Online)
            }, 1000);
            setTimeout(() => { //Dopo 2 secondi, fai la stessa cosa ma con newReceived
                this.writing = false;//Ha effettuato logout (mostra)
                this.$nextTick(() => {
                    this.$refs.messages[this.$refs.messages.length - 1].scrollIntoView()
                
                })

            }, 3000);

        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        searchChat() {
            this.searchedContacts = this.contacts.filter(contact => {//Altrimenti filtra
                if (contact.name.toLowerCase().includes(this.nameSearch.toLowerCase()) || contact.name.includes()) {//Con il contenuto di nameSearch
                    return true;
                }
            })
        },
        deleteMsg(i) {
            this.contacts[this.activeChat].messages.splice(i, 1)
        },
        initializeEmoji() {
            const button = this.$refs.emoji;
            const picker = new EmojiButton();
            picker.on('emoji', emoji => {
                this.textMessage += emoji;
            });
            button.addEventListener('click', () => {
                picker.togglePicker(button);
            });
        }
    },
    created() {
        this.searchedContacts = this.contacts//Alla creazione, searchedContacts diventa contacts

    },
    mounted() {
        this.initializeEmoji();

    }

}).mount('#app')


