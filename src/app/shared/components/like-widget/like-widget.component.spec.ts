import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { UnideServiceId } from "../../services/unique-id/unique-id.service";
import { LikeWidgetComponent } from "./like-widget.component";
import { LikeWidgetModule } from "./like-widget.module";

let component :ComponentFixture<LikeWidgetComponent> = null
let instance = null
beforeEach(async () => {
  await TestBed.configureTestingModule({
    // declarations:[LikeWidgetComponent],
    // providers:[UnideServiceId],
    imports:[LikeWidgetModule]
  }).compileComponents();
  component = TestBed.createComponent(LikeWidgetComponent)
  instance = component.componentInstance
})
  describe(LikeWidgetComponent.name, () => {
    it('Should check if the component self is created', () => {

      expect(instance).toBeTruthy

    })

    it("Should not auto-generate id when (@Input id) is not assigned", () => {
      component.detectChanges();
      expect(instance.id).toBeTruthy();

    })

    it("Should NOT auto-generate id when (@Input id) is not assigned", () => {
      const someId = "someId"
      instance.id = someId;
      component.detectChanges();
      expect(instance.id).toBe(someId)

    })

    // it(`${LikeWidgetComponent.prototype.like.name},
    // should call emission when called`, () => {
    //   component.detectChanges();
      // instance.liked.subscribe(()=> {
      //   expect(true).toBeTrue();
      //   done()
      // })
      // instance.like();

    // })

    // Quando for assincrono (trigger)
    it(`${LikeWidgetComponent.prototype.like.name},
    should trigger (@Input liked) when called`, () => {
      spyOn(instance.liked, 'emit')
      component.detectChanges();
      instance.like();
      expect(instance.liked.emit).toHaveBeenCalled();

    })


})
