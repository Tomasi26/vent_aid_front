// core
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

// router
import {ActivatedRoute, Router} from '@angular/router';

// store
import {select, Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as fromVentOutputState from '../store/vent-output.state';
import * as fromVentOutputActions from '../store/vent-output.actions';
import * as fromVentOutputSelectors from '../store/vent-output.selectors';

// rxjs
import {Subscription} from 'rxjs';

// vent output
import {VentOutput} from '../model/vent-output.model';

// message
import {Message} from '../../messages/message.model';

@Component({
  selector: 'app-vent-output-panel',
  styleUrls: ['vent-output-panel.component.scss'],
  templateUrl: 'vent-output-panel.component.html',
  encapsulation: ViewEncapsulation.None
})

export class VentOutputPanelComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {


  // vent output store
  ventOutput: VentOutput;
  ventOutputLoading = false;
  ventOutputError: Message = null;
  ventOutputSuccess: Message = null;
  ventOutputSub: Subscription;
  ventOutputLoadingSub: Subscription;
  ventOutputErrorSub: Subscription;
  ventOutputSuccessSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>,
    private ventOutputStore: Store<fromVentOutputState.VentOutputState>) {}

  ngOnInit() {
    // subscribe to vent output state
    this.subscribeVentOutputStateObservables();
  }

  // vent output state
  subscribeVentOutputStateObservables() {

    // vent output
    this.ventOutputSub = this.ventOutputStore.pipe(
      select(fromVentOutputSelectors.selectVentOutput)
    ).subscribe(ventOutput => {
      this.ventOutput = ventOutput;
    });

    // loading
    this.ventOutputLoadingSub = this.ventOutputStore.pipe(
      select(fromVentOutputSelectors.selectVentOutputLoading)
    ).subscribe(ventOutputLoading => {
      this.ventOutputLoading = ventOutputLoading;
    });

    // success message
    this.ventOutputSuccessSub = this.ventOutputStore.pipe(
      select(fromVentOutputSelectors.selectVentOutputSuccess)
    ).subscribe(ventOutputSuccess => {
      this.ventOutputSuccess = ventOutputSuccess;
    });

    // error message
    this.ventOutputErrorSub = this.ventOutputStore.pipe(
      select(fromVentOutputSelectors.selectVentOutputError)
    ).subscribe(ventOutputError => {
      this.ventOutputError = ventOutputError;
    });

  }

  unsubscribeVentOutputStateObservables() {

    if (this.ventOutputSub) {
      this.ventOutputSub.unsubscribe();
    }
    if (this.ventOutputLoadingSub){
      this.ventOutputLoadingSub.unsubscribe();
    }
    if (this.ventOutputSuccessSub){
      this.ventOutputSuccessSub.unsubscribe();
    }
    if (this.ventOutputErrorSub){
      this.ventOutputErrorSub.unsubscribe();
    }

  }


  ngAfterViewInit() {


  }

  ngAfterContentInit() {

  }

  ngOnDestroy() {
    // unsubscribe to vent output state
    this.unsubscribeVentOutputStateObservables();
  }

}
