'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-snotify</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="contributing.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CONTRIBUTING
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' : 'data-target="#xs-components-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' :
                                            'id="xs-components-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' : 'data-target="#xs-injectables-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' :
                                        'id="xs-injectables-links-module-AppModule-628114fde90e51e9c2e8fab85c85bb3e"' }>
                                        <li class="link">
                                            <a href="injectables/SnotifyService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SnotifyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SnotifyModule.html" data-type="entity-link">SnotifyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' : 'data-target="#xs-components-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' :
                                            'id="xs-components-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' }>
                                            <li class="link">
                                                <a href="components/ButtonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PromptComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PromptComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SnotifyComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SnotifyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ToastComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' : 'data-target="#xs-pipes-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' :
                                            'id="xs-pipes-links-module-SnotifyModule-762ff260ab704c1714124ff09c552ae7"' }>
                                            <li class="link">
                                                <a href="pipes/KeysPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KeysPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TruncatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/APage.html" data-type="entity-link">APage</a>
                            </li>
                            <li class="link">
                                <a href="classes/SnotifyToast.html" data-type="entity-link">SnotifyToast</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SnotifyService.html" data-type="entity-link">SnotifyService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Snotify.html" data-type="entity-link">Snotify</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyAnimate.html" data-type="entity-link">SnotifyAnimate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyButton.html" data-type="entity-link">SnotifyButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyDefaults.html" data-type="entity-link">SnotifyDefaults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyGlobalConfig.html" data-type="entity-link">SnotifyGlobalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyNotifications.html" data-type="entity-link">SnotifyNotifications</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyStyles.html" data-type="entity-link">SnotifyStyles</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifyToastConfig.html" data-type="entity-link">SnotifyToastConfig</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});