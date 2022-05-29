export default {
    state: () => ({
        business: {
            handcraft: {
                metalWorker: false,
                electrician: false,
                mechanic: false,
                painter: false,
                bricklayer: false,
                roofer: false,
            },
            scientist: {
                scientist: false,
                specialScientistField: '',
                researcher: false,
                specialResearcherField: '',
            },
            hotelAndGastro: {
                cook: false,
                hotelManager: false,
                hotelClerk: false,
                baker: false
            },
            it: {
                uxDeveloper: false,
                webDesigner: false,
                backendDeveloper: false,
                fullStackDeveloper: false,
                qa: false
            },
            medicine: {
                doctor: false,
                specialDoctorField: '',
                caregiver: false,
                specialCareField: '',
            },
            engineering: {
                architect: false,
                civilEngineer: false,
                machineEngineer: false,
                mechanicEngineer: false,
                electricEngineer: false
            },
            other : ''
        },
        currentJob: '',
        citizen: '',
        experienceInYears: 0,
        diploma: {
            highSchoolDiploma: [],
            vocationalSchoolDiploma: [],
            noneDiploma: false
        },
        seekerLanguage: {
            english: 0,
            german: 0,
            otherLanguage: [],
        },
        selectedLicence: [],
        licenceOptions: [
            { text: 'Auto bis 3,5t', value: 'Car till 3,5t' },
            { text: 'Auto mit Anhänger', value: 'Car with trailer' },
            { text: 'Motorrad', value: 'Motorcycle' },
            { text: 'LKW 3,5 - 7,5t', value: 'Truck 3,5 - 7,5t' },
            { text: 'Bus', value: 'Bus' },
            { text: 'keine', value: 'None' }
        ],
        seekerEmail: '',
        seekerFirstname: '',
        seekerLastname: '',
        seekerAge: '',
        seekerPhone: '',
        seekerCountry: '',
        seekerCity: '',
        payload: {
            business: {},
            currentJob: null,
            experienceInYears: null,
            citizen: null,
            diploma: {
                highSchoolDiploma: [],
                vocationalSchoolDiploma: [],
                noneDiploma: null
            },
            seekerLanguage: {
                english: 0,
                german: 0,
                otherLanguage: [],
            },
            selectedLicence: [],
            seekerEmail: null,
            seekerFirstname: null,
            seekerLastname: null,
            seekerAge: null,
            seekerPhone: null,
            seekerCountry: null,
            seekerCity: null,
        }
    }),
    mutations: {
        mutateBusiness(state, value) {
            state.business = value
        },
        mutateCurrentJob(state, value) {
            state.currentJob = value
        },
        mutateExperienceInYears(state, value) {
            state.experienceInYears = value
        },
        mutateDiploma(state, value) {
            state.diploma = value
        },
        mutateSeekerEmail(state, value) {
            state.seekerEmail = value
        },
        mutateSeekerFirstname(state, value) {
            state.seekerFirstname = value
        },
        mutateSeekerLastname(state, value) {
            state.seekerLastname = value
        },
        mutateSeekerAge(state, value) {
            state.seekerAge = value
        },
        mutateSeekerPhone(state, value) {
            state.seekerPhone = value
        },
        mutateSeekerCountry(state, value) {
            state.seekerCountry = value
        },
        mutateSeekerCity(state, value) {
            state.seekerCity = value
        },
        mutateSelectedLicence(state, value) {
            state.selectedLicence = value
        },
        mutateSeekerLanguage(state, value) {
            state.seekerLanguage = value
        },
        mutateCitizen(state, value) {
            state.citizen = value
        }
    },
    actions: {
        setBusiness(context, value) {
            context.commit('mutateBusiness', value)
        },
        setCurrentJob(context, value) {
            context.commit('mutateCurrentJob', value)
        },
        setExperienceInYears(context, value) {
            context.commit('mutateExperienceInYears', value)
        },
        setDiploma(context, value) {
            context.commit('mutateDiploma', value)
        },
        setSeekerEmail(context, value) {
            context.commit('mutateSeekerEmail', value)
        },
        setSeekerFirstname(context, value) {
            context.commit('mutateSeekerFirstname', value)
        },
        setSeekerLastname(context, value) {
            context.commit('mutateSeekerLastname', value)
        },
        setSeekerAge(context, value) {
            context.commit('mutateSeekerAge', value)
        },
        setSeekerPhone(context, value) {
            context.commit('mutateSeekerPhone', value)
        },
        setSeekerCountry(context, value) {
            context.commit('mutateSeekerCountry', value)
        },
        setSeekerCity(context, value) {
            context.commit('mutateSeekerCity', value)
        },
        setSelectedLicence(context, value) {
            context.commit('mutateSelectedLicence', value)
        },
        setSeekerLanguage(context, value) {
            context.commit('mutateSeekerLanguage', value)
        },
        setCitizen(context, value) {
            context.commit('mutateCitizen', value)
        },
    },
    getters: {
        getBusiness(state) {
            return state.business
        },
        getExperienceInYears(state) {
            return state.experienceInYears
        },
        getCurrentJob(state) {
            return state.currentJob
        },
        getDiploma(state) {
            return state.diploma
        },
        getSeekerEmail(state) {
            return state.seekerEmail
        },
        getSeekerFirstname(state) {
            return state.seekerFirstname
        },
        getSeekerLastname(state) {
            return state.seekerLastname
        },
        getSeekerAge(state) {
            return state.seekerAge
        },
        getSeekerPhone(state) {
            return state.seekerPhone
        },
        getSeekerCountry(state) {
            return state.seekerCountry
        },
        getSeekerCity(state) {
            return state.seekerCity
        },
        getSelectedLicence(state) {
            return state.selectedLicence
        },
        getLicenceOptions(state) {
            return state.licenceOptions
        },
        getSeekerLanguage(state) {
            return state.seekerLanguage
        },
        getCitizen(state) {
            return state.citizen
        },
        getPayload(state) {
            state.payload.business = state.business
            state.payload.citizen = state.citizen
            state.payload.currentJob = state.currentJob
            state.payload.experienceInYears = state.experienceInYears
            state.payload.diploma = state.diploma
            state.payload.seekerFirstname = state.seekerFirstname
            state.payload.seekerLastname = state.seekerLastname
            state.payload.seekerAge = state.seekerAge
            state.payload.seekerCity = state.seekerCity
            state.payload.seekerCountry = state.seekerCountry
            state.payload.seekerEmail = state.seekerEmail
            state.payload.seekerPhone = state.seekerPhone
            return state.payload
        },
    }
}