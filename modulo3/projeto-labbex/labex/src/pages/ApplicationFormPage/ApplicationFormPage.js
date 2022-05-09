import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { DivButtons, ApplicationContainer, FormContainer, InputLabel, SelectLabel, ButtonContainer, Titulo } from "./styled"
import axios from "axios";
import useForm from "../../hooks/useForm";


const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
export const ApplicationFormPage = () => {
   
    const { form, onChange, cleaFields } = useForm({ name: "", age: "", applicationText: "", profession: "", country: "", tripId:"" });

    const navigate = useNavigate()



    const travelRegistration = (event) => {
        event.preventDefault();
        console.log(form)
        const body = form
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-lima-silveira/trips/:id/apply', body)
            .then((res) => {
                console.log(res.data)
                cleaFields();
            }).catch((err) => {
                console.log(err.response)

            });
    };


    return (
        <div>
            <ApplicationContainer>

                <Titulo><strong>Inscreva-se para uma viagem</strong></Titulo>
                <FormContainer onSubmit={travelRegistration}>
                    <SelectLabel
                        name={"tripId"}
                        onChange={onChange}>
                        <option value= "" disabled>Escolha uma viagem</option>
                        
                                                             
                        
                    </SelectLabel>
                    <InputLabel
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={onChange}
                        placeholder={"Nome"}
                        required

                    />
                    <InputLabel
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        type="number"
                        placeholder={"Idade"}
                        required
                        min={18}
                    />
                    
                    <InputLabel
                        name="applicationText"
                        type="text"
                        value={form.applicationText}
                        onChange={onChange}
                        placeholder={"Texto de Candidatura"}
                        required
                        
                    />
                    <InputLabel
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        placeholder={"Profissão"}
                        required
                    />
                    <SelectLabel
                        name="countries"
                        defaultValue={""}
                        onChange={onChange}
                        placeholder={"País"}
                        required
                    >
                        <option value={""} disabled>Escolha um País</option>
                        {countries.map((country) => {
                            return <option value={country} key={country}>{country}</option>
                        })}
                    </SelectLabel>
                    <DivButtons>
                        <button  > Enviar </button>
                        <button onClick={() => goBack(navigate)}> Voltar </button>
                    </DivButtons>
                </FormContainer>
            </ApplicationContainer>


        </div>

    )
}
    ;    