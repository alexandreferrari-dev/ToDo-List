import Text from "./components/text.tsx";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PecilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import XIcon from "./assets/icons/X-Regular.svg?react";
import Icon from './components/icon.tsx';

export default function App() {
  return (
  <div>
    <div className="flex flex-col gap-2">
      <Text variant="body-sm-bold" className='text-pink-base'>
        Olá mundo!!
      </Text>
      <Text className='text-green-base'>
        Olá mundo!!
      </Text>
      <Text variant="body-md-bold" className='text-pink-base'>
        Olá mundo!!
      </Text>
      <Text>Levar o dog para passear</Text>
    </div>
    <div className="flex gap-1">
      <Icon svg={TrashIcon} className="fill-pink-base" />
      <Icon svg={CheckIcon} className="fill-green-base" />
      <Icon svg={PecilIcon} className="fill-pink-base" />
      <Icon svg={PlusIcon} className="fill-pink-base" />
      <Icon svg={SpinnerIcon} animate className="fill-pink-base" />
      <Icon svg={XIcon} className="fill-pink-base" />
    </div>
  </div>
  )
}

