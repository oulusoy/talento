export default {
    state: () => ({
        sector: {
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
        workerCitizen: '',
        workerExperienceInYears: 0,
        workerDiploma: {
            highSchoolDiploma: [],
            vocationalSchoolDiploma: [],
            noneDiploma: false
        },
        workerLanguage: {
            english: 0,
            german: 0,
            otherLanguage: [],
        },
        workerSelectedLicence: [],
        workerLicenceOptions: [
            { text: 'Auto bis 3,5t', value: 'Car till 3,5t' },
            { text: 'Auto mit Anhänger', value: 'Car with trailer' },
            { text: 'Motorrad', value: 'Motorcycle' },
            { text: 'LKW 3,5 - 7,5t', value: 'Truck 3,5 - 7,5t' },
            { text: 'Bus', value: 'Bus' },
            { text: 'keine', value: 'None' }
        ],
        companyEmail: '',
        companyFirstname: '',
        companyLastname: '',
        companyAge: '',
        companyPhone: '',
        companyCountry: '',
        companyCity: '',
        companyPayload: {
            sector: {},
            workerExperienceInYears: null,
            workerCitizen: null,
            workerDiploma: {
                highSchoolDiploma: [],
                vocationalSchoolDiploma: [],
                noneDiploma: null
            },
            workerLanguage: {
                english: 0,
                german: 0,
                otherLanguage: [],
            },
            workerLicenceOptions: [],
            workerSelectedLicence: [],
            companyEmail: null,
            companyFirstname: null,
            companyLastname: null,
            companyAge: null,
            companyPhone: null,
            companyCountry: null,
            companyCity: null,
        }
    }),
    mutations: {
        mutateSector(state, value) {
            state.sector = value
        },
        mutateWorkerExperienceInYears(state, value) {
            state.workerExperienceInYears = value
        },
        mutateWorkerDiploma(state, value) {
            state.workerDiploma = value
        },
        mutateCompanyEmail(state, value) {
            state.companyEmail = value
        },
        mutateCompanyFirstname(state, value) {
            state.companyFirstname = value
        },
        mutateCompanyLastname(state, value) {
            state.companyLastname = value
        },
        mutateCompanyPhone(state, value) {
            state.companyPhone = value
        },
        mutateCompanyCountry(state, value) {
            state.companyCountry = value
        },
        mutateCompanyCity(state, value) {
            state.companyCity = value
        },
        mutateWorkerSelectedLicence(state, value) {
            state.selectedLicence = value
        },
        mutateWorkerLanguage(state, value) {
            state.workerLanguage = value
        },
        mutateWorkerCitizen(state, value) {
            state.citizen = value
        }
    },
    actions: {
        setSector(context, value) {
            context.commit('mutateSector', value)
        },
        setWorkerExperienceInYears(context, value) {
            context.commit('mutateWorkerExperienceInYears', value)
        },
        setWorkerDiploma(context, value) {
            context.commit('mutateWorkerDiploma', value)
        },
        setCompanyEmail(context, value) {
            context.commit('mutateCompanyEmail', value)
        },
        setCompanyFirstname(context, value) {
            context.commit('mutateCompanyFirstname', value)
        },
        setCompanyLastname(context, value) {
            context.commit('mutateCompanyLastname', value)
        },
        setCompanyPhone(context, value) {
            context.commit('mutateCompanyPhone', value)
        },
        setCompanyCountry(context, value) {
            context.commit('mutateCompanyCountry', value)
        },
        setCompanyCity(context, value) {
            context.commit('mutateCompanyCity', value)
        },
        setWorkerSelectedLicence(context, value) {
            context.commit('mutateWorkerSelectedLicence', value)
        },
        setWorkerLanguage(context, value) {
            context.commit('mutateWorkerLanguage', value)
        },
        setWorkerCitizen(context, value) {
            context.commit('mutateWorkerCitizen', value)
        },
    },
    getters: {
        getSector(state) {
            return state.sector
        },
        getWorkerExperienceInYears(state) {
            return state.experienceInYears
        },
        getWorkerDiploma(state) {
            return state.diploma
        },
        getCompanyEmail(state) {
            return state.companyEmail
        },
        getCompanyFirstname(state) {
            return state.companyFirstname
        },
        getCompanyLastname(state) {
            return state.companyLastname
        },
        getCompanyPhone(state) {
            return state.companyPhone
        },
        getCompanyCountry(state) {
            return state.companyCountry
        },
        getCompanyCity(state) {
            return state.companyCity
        },
        getWorkerLicence(state) {
            return state.workerSelectedLicence
        },
        getWorkerLicenceOptions(state) {
            return state.workerLicenceOptions
        },
        getWorkerLanguage(state) {
            return state.workerLanguage
        },
        getWorkerCitizen(state) {
            return state.workerCitizen
        },
        getCompanyPayload(state) {
            state.companyPayload.sector = state.sector
            state.companyPayload.workerCitizen = state.workerCitizen
            state.companyPayload.workerExperienceInYears = state.workerExperienceInYears
            state.companyPayload.workerDiploma = state.workerDiploma
            state.companyPayload.companyFirstname = state.companyFirstname
            state.companyPayload.companyLastname = state.companyLastname
            state.companyPayload.companyCity = state.companyCity
            state.companyPayload.companyCountry = state.companyCountry
            state.companyPayload.companyEmail = state.companyEmail
            state.companyPayload.companyPhone = state.companyPhone
            state.companyPayload.workerSelectedLicence = state.workerSelectedLicence
            return state.companyPayload
        },
    }
}