import {Oval} from 'react-loader-spinner'
import { LoaderConteiner } from './loader_style'

export const Loader = () => {
    return (
        <LoaderConteiner>
       <Oval
  height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#0056b3"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
        </LoaderConteiner>
    )
}