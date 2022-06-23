import { Component} from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
/*
  constructor(private menu: MenuController) {

  }

  ngOnInit(): void {
    this.menu.enable(
      true,'first'
    );
  }
  */
  constructor(
    private popover: PopoverController,
    private alertController: AlertController) {}

  openMenu(myevent: MouseEvent): void {
    this.popover.create(
      {
        component: MenuComponent,
        showBackdrop: true,
        cssClass: 'my-menu-class',
        event: myevent,
        componentProps: {
          myprop : 'Home Menu Popover ',
          nb : ['Menu des cours','Menu Home']
        }
      }
    ).then(
      (popoverElement: HTMLIonPopoverElement) => {
        popoverElement.present(); //Je rend visible MenuComponent avec les props
        popoverElement.onDidDismiss().then(
          (res: OverlayEventDetail<any>) =>
          {
            //Lorsque je clique sur un item ou si je quitte mon menu
            console.log(res);
          }
        );
      }
    );
  }

  async openAlert() {
    const monMessage = 'le message de l\'alerte';
    const alert = await
    this.alertController.create(
      {
        header : 'SUPER ERREUR',
        message : monMessage,
        buttons: ['OK'],
      }
    );
   await alert.present();
   await alert.onDidDismiss();
  }
}
