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
            searchedContacts: [{}]
        }
    },
    methods: {
        showChat(key) {
            for (contact of this.contacts) {
                if (contact.id === key) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }

            }
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
            ]; //Array con varie risposte
            response = this.getRndInteger(0, responses.length - 1) //Genera indice casuale 

            for (contact of this.contacts) { //Per ogni contatto
                if (contact.visible === true) {//Se è visibile (quindi la nostra schermata attuale, nonché l'array collegato)
                    visiblenow = contact.id //Salva con chi stai parlando
                    contact.messages.push(newMessage); //Aggiungi newMessage
                    this.textMessage = "";
                    setTimeout(() => { //Dopo 2 secondi, fai la stessa cosa ma con newReceived
                        for (contact of this.contacts)
                            if (contact.id === visiblenow) {//Inserisce messaggio ricevuto nell'array di chi stavi parlando (nel caso cambiassi chat prima del secondo di risposta)
                                this.timeNow = DateTime.local().toFormat('dd/MM/yyyy HH:mm:ss');//Aggiorna la data per la risposta
                                newReceived = {
                                    date: this.timeNow,
                                    message: responses[response], //Aggiungi il messaggio randomico (dall'indice estratto)
                                    status: "received"
                                }
                                contact.messages.push(newReceived);
                            }
                    }, 1000);
                }

            }

        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        searchChat() {
            if (this.nameSearch === "") {//Se non si sta cercando nulla
                this.searchedContacts = this.contacts;//searchedContacts contiene tutto contacts
            } else {
                this.searchedContacts = this.contacts.filter(contact => {//Altrimenti filtra
                    if (contact.name.includes(this.nameSearch)) {//Con il contenuto di nameSearch
                        return true;
                    }
                }
                )
            }
        }
    },
    created() {
        this.searchedContacts = this.contacts//Alla creazione, searchedContacts diventa contacts
    }

}).mount('#app')