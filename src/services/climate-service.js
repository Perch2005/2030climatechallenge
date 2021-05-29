export default class ClimateService {

_facts = [
    {
        id:1,
        index:0,
        fact:'The buildings, industry, and transportation sectors together account for 63% of greenhouse gas emissions in the United States.',
        source:'Inventory of U.S. Greenhouse Gas Emissions and Sinks: 1990-2017. April 2019.',
        href:'https://www.epa.gov/ghgemissions/inventory-us-greenhouse-gas-emissions-and-sinks-1990-2017',
        clik:false
    },
    {
        id:2,
        index:1,
        fact:'Transportation is now the largest source of greenhouse gas emissions in the U.S., surpassing the emissions from the power sector for the first time in 2016.',
        source:'Kusnetz, Nicholas. U.S. Emissions Dropped in 2019: Heres Why in 6 Charts. January 7, 2020.',
        href:'https://insideclimatenews.org/news/07012020/infographic-united-states-emissions-2019-climate-change-greenhouse-gas-coal-transportation/',
        clik:false
    },
    {
        id:3,
        index:2,
        fact:'Industry is now a larger source of emissions than coal-fired power generation, and emissions from that sector are growing.',
        source:'Houser, Trevor, and Hannah Pitt. Preliminary US Emissions Estimates for 2019. January 7, 2020.',
        href:'https://rhg.com/research/preliminary-us-emissions-2019/',
        clik:false
    },
    {
        id:4,
        index:3,
        fact:'Emissions in the buildings sector comprise of indirect (electricity generated off-site to power buildings) and direct emissions (on-site combustion of fossil fuels for cooking and space and water heating).',
        source:'Leung, Jessica. Decarbonizing U.S. Buildings - C2ES Climate Innovation 2050. July 2018.',
        href:'https://www.c2es.org/document/decarbonizing-u-s-buildings/',
        clik:false
    }
]

_questions_and_answers = [
    {
        id:1,
        question:'What is the 2030 Climate Challenge?',
        answer:'The 2030 Climate Challenge is a public competition launched to award $10 million to the most impactful and durable solution to reduce greenhouse gas emissions in the buildings, industry, and/or transportation sectors in the U.S. by 2030.'
    },
    {
        id:2,
        question:'Can you further clarify the three sectors this competition focuses on?',
        answer:'Our framework focuses on energy-related emissions in the transport, buildings, or industry sectors. Please note that applicants do not need to be overtly focused on whether a proposed solution cleanly fits into one or more of the three sectors. We are cognizant that there are numerous emissions-reducing solutions that can traverse across these three sectors but might be difficult to neatly categorize. For example, if a proposed solution looks at reducing emissions from materials used in buildings construction, this can affect energy-related emissions in both the buildings and the industry sectors (since cement and steel are common construction materials). This type of solution is within the scope of this competition.Transportation: This refers to GHG emissions that are primarily produced from burning fossil fuel for cars, trucks, ships, trains, and planes. Industry: This refers to GHG emissions primarily from burning fossil fuels for energy as well as chemical reactions in the production of goods from raw materials. This includes sub-sectors such as iron and steel, chemicals, cement and concrete, paper and pulp, etc.Buildings: This refers to GHG emissions from commercial and residential buildings primarily from burning fossil fuels for heat, using products that contain greenhouse gases, appliances and equipment, and the handling of waste.'
    },
    {
        id:3,
        question:'Who is eligible to apply?',
        answer:'We are looking for solutions from organizations or a coalition of organizations. Only registered non-profits can serve as the lead applicant.Eligible lead applicants can include:• An entity under section 501(c)(3) and 509(a)(1) or (2) of the Internal Revenue Code (“IRC”) that has received a tax determination letter from the Internal Revenue Service (“IRS”); OR • A private foundation under section 501(c)(3) of the IRC that has received a tax determination letter from the IRS. The lead applicant is a single legal entity that has the legal responsibility, authority for and control of the use of any grant funds; is responsible for the reporting on any grant funds; and must be able to exercise control and supervision of the proposed project. Eligible lead applicants are welcome to partner with for-profit companies, foundations, schools, colleges and universities, government agencies, individuals, and other entities in order to implement the initiative. Use the Organizational Readiness Tool to find out if you’re a good fit for the grant, refer to the rules for a complete set of eligibility requirements, and please contact questions@2030climatechallenge.org with any questions regarding eligibility.'
    },
    {
        id:4,
        question:'Can colleges and universities participate?',
        answer:'Colleges, universities, and university-affiliated institutes in the U.S. with 501c3 status are eligible to apply as the lead applicant. They may also participate as part of a coalition with another registered non-profit as the lead.'
    },

    {
        id:5,
        question:'What types of submissions are you looking for?',
        answer:'We are looking for proven, data-driven solutions ready to serve as a model for change for communities across the United States. Strong applications will propose impactful, evidence-based solutions that are feasible to implement and lead to durable reductions in emissions. Teams will demonstrate that they have the track record, experience, partnerships, and resources to create lasting change, as well as the evidence-based approach to accelerate their impact at a larger scale. Complete the Organizational Readiness Tool to find out if you’re a good fit for the Challenge.'
    },
    {
        id:6,
        question:'How do we apply?',
        answer:'You must first assess your fit and eligibility for the 2030 Climate Challenge, and then register no later than Thursday, July 23, 2020, at 5:00 p.m. Pacific Time. Registration is required and is a simple two-step process. First, create a username and password, and then check your inbox to confirm your registration. Next, complete the online registration form. Once you are registered, submit your application online no later than Thursday, August 20, 2020, at 5:00 p.m. Pacific Time.'
    },
    {
        id:7,
        question:'How will applications be evaluated?',
        answer:'After the submission deadline is reached, the 2030 Climate Challenge team will perform an administrative review to confirm each submission meets the rules and application requirements before advancing eligible submissions to peer-to-peer review.During peer-to-peer review, each lead organization will score and comment on five applications from other organizations. Top-scoring applications will move on to the evaluation panel and receive an additional review and comments from five expert reviewers. All reviewers will use the four criteria included in the scoring rubric: impactful, feasible, evidence-based, and durable. All scores will be statistically normalized to ensure fairness.In partnership with Lever for Change, the Selection Committee will review the top-scoring submissions and request additional information as needed to select up to five Finalists based on considerations that may include, but are not limited to, Evaluation Panel resulting rank order, organizational capacity, geographic diversity, and feasibility. The donor will make the final determination of the Finalists and the $10 million awardee.'
    },
    {
        id:8,
        question:'Can an organization submit more than one proposal?',
        answer:'As stated in the Rules, an organization can submit multiple applications as the lead applicant or as a partner on a team provided that each application proposes a separate, distinct solution. Each application, however, must be submitted by a different team member using a unique email address.'
    }
]


// async getResourse (url){
//     const res = await fetch(url)
//     console.log(res.status);
//     if(!res.ok){
//          throw new Error('ERROR !!!')
//     }
//     return await res.json()
// }

// getSlideShows = async () =>{
//     const res = await this.getResourse("https://next.json-generator.com/api/json/get/41a82O0Sq")
// return res.map(this._transformData)
// }
//     getSlideShow = async (index) =>{
// const res = await this.getResourse("https://next.json-generator.com/api/json/get/41a82O0Sq")
// return this._transformData(res[index])
//     }
//     _transformData(data){
//         return{
// _id:data._id,
// index:data.index,
// address:data.address,
// about:data.about
//         }
//     }

    getFacts = () => {
        return new Promise((resolve,reject) => {
setTimeout(() =>{ 
    if(Math.random() > 0.75){
        reject(new Error('ERROR'))
    } else{
        resolve(this._facts)
    }

},700)
        })
    }

    getQuestionsAndAnswers = () => {
        return new Promise((resolve,reject) => {
setTimeout(() =>{ 
    if(Math.random() > 0.75){
        reject(new Error('ERROR'))
    } else{
        resolve(this._questions_and_answers)
    }

},700)
        })
    }
    getQuestionAndAnswer = async(id) => {
        const dataIndex = this._questions_and_answers.findIndex((data) => data.id == id);
        return  this._questions_and_answers[dataIndex]
    }
}