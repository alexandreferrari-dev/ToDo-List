import Text from "./components/text.tsx";
import TrashIcon from "./assets/icons/Trash-Regular.svg?react";
import CheckIcon from "./assets/icons/Check-Regular.svg?react";
import PecilIcon from "./assets/icons/PencilSimple-Regular.svg?react";
import PlusIcon from "./assets/icons/Plus-Regular.svg?react";
import SpinnerIcon from "./assets/icons/Spinner.svg?react";
import XIcon from "./assets/icons/X-Regular.svg?react";
import Icon from './components/icon.tsx';
import Badge from './components/badge.tsx';
import Button from './components/button.tsx';
import ButtonIcon from './components/button-icon.tsx';
import InputText from './components/input-text.tsx';
import InputCheckbox from './components/input-checkbox.tsx';
import Card from './components/card.tsx';

export default function App() {
  return (
  <div className="grid gap-5">
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
    <div>
      <Badge variant="secondary">5</Badge>
      <Badge variant="primary">2 de 5</Badge>
    </div>
    <div>
      <Button icon={PlusIcon}>Nova tarefa</Button>
    </div>
    <div className="flex gap-2">
      <ButtonIcon icon={TrashIcon} variant="primary" />
      <ButtonIcon icon={TrashIcon} variant="secondary" />
      <ButtonIcon icon={TrashIcon} variant="terciary" />
    </div>
    <div>
      <InputText />
    </div>
    <div>
      <InputCheckbox />
    </div>
    <div>
      <Card size="md">Olá mundo!</Card>
    </div>
  </div>
  )
}

