export default {
    state: () => ({
        lang: 'en',
        en: {
            homeEmployee: 'I´m searching a job',
            homeEmployer: 'I`m searching workers',
            homeEmployerSupport: 'We need support to register a worker',
            EmployeeFunnelHeader: 'WHICH BRANCH ARE YOU INTERESTED IN ?'
        },
        de: {
            homeEmployee: 'Ich suche einen Job',
            homeEmployer: 'Ich suche einen Mitarbeiter',
            homeEmployerSupport: 'Wir benötigen Hilfe bei der Anmeldung des Mitarbeiters',
            EmployeeFunnelHeader: 'FÜR WELCHE BRANCHE INTERESSIEREN SIE SICH ?'
        },
        tr: {
            homeEmployee: 'Iş arıyorum',
            homeEmployer: 'Bir çalışan arıyorum',
            homeEmployerSupport: 'Çalışanı kaydettirmek için yardıma ihtiyacımız var',
            EmployeeFunnelHeader: 'HANGI BRANCHE ILGINIZI CEKIYOR?'
        }
    }),
    mutations: {
        mutateLanguage(state, value) {
            state.lang = value
        }
    },
    actions: {
        setLanguage(context, value) {
            context.commit('mutateLanguage', value)
        }
    },
    getters: {
        getLanguage(state) {
            return state.lang
        },
        getCurrentLanguage(state) {
            switch (state.lang) {
                case 'en':
                    return state.en
                case 'de':
                    return state.de
                case 'tr':
                    return state.tr
                default:
                    return state.en
            }
        }
    }
}