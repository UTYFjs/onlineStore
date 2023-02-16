import React from 'react';
import Accordion from '../../components/Accordeon/Accordion';
import { dataProducts } from '../../data/dataProducts';
import styles from './HowToOrder.module.scss';
function HowToOrder() {
  return (
    <div>
      <Accordion title="Как заказать?">
        <p> Напишите нам</p>
      </Accordion>
      <Accordion title="Как оплатить? и когда?">
        <p>
          Изделия с персонализацией и выполненные под ваши мерки (например все ремни) выполняем по
          предоплате 50% -100% . Оплату принимаем наличными либо на карту Bank of Georgia.
        </p>
      </Accordion>
      <Accordion title="Как оплатить? и когда?">
        <p>
          Изделия с персонализацией и выполненные под ваши мерки (например все ремни) выполняем по
          предоплате 50% -100% . Оплату принимаем наличными либо на карту Bank of Georgia.
        </p>
      </Accordion>
      <Accordion title="В какие минимальные сроки вы делаете свои изделия?">
        <p>
          Срок изготовления зависит от наличия кожи загрузки сложности изделия и как правило
          составляет от 1 дня до 1 месяца. обычно срок изготовления состовляет 3-5 дней. и как
          правило мы стараемся отдать изделие как можно раньше{' '}
        </p>
      </Accordion>
      <Accordion title="Как с вами связаться для оформления заказа?">
        <p>
          Для оформления заказа вы можете связаться с нами в instagram либо одном из мессенджером
          (telegram/whatsApp){' '}
        </p>
      </Accordion>
      <Accordion title="Могу ли я заказать полностью индивидуальное изделие?">
        <p>
          Да, мы можем внести изменение в конструкцию наших изделий, изготовить новую модель на
          основе уже имеющихся, либо сделать изделия по вашему образцу. Но в этом случае срок
          изготовления будет увеличен так как нам потребуется время для изготовления лекала. в любом
          случае если вы хотите что то кастомное - напишите нам в (....) мы обсудим и дадим вам
          ответ сможем ли это сделать и вкакие сроки.{' '}
        </p>
      </Accordion>
    </div>
  );
}

export default HowToOrder;
