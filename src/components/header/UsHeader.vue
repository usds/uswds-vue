<template>
    <div>
        <a class="usa-skipnav" href="#main-content">Skip to main content</a>
        <div class="usa-overlay"></div>
        
        <header class="usa-header usa-header--basic" :class="`bg-${variant}`">
            <div class="usa-nav-container" :class="`fluid-${this.fluid}`">
                

                <!--
            <div class="usa-navbar">
                <div class="usa-logo" id="basic-logo">
                    <em class="usa-logo__text">
                        <a href="/" title="Home" aria-label="Home">Project title</a>
                    </em>
                </div>
                <button class="usa-menu-btn">Menu</button>
            </div>
            -->

                <slot></slot>

                <!--

            <nav aria-label="Primary navigation" class="usa-nav">
                
                <button class="usa-nav__close">
                    <i class="fas fa-times"></i>
                </button>
            
                <ul class="usa-nav__primary usa-accordion">
                    <li class="usa-nav__primary-item">
                        <button
                            class="usa-accordion__button usa-nav__link usa-current"
                            aria-expanded="false"
                            aria-controls="basic-nav-section-one"
                        >
                            <span>Current section</span>
                        </button>
                        <ul id="basic-nav-section-one" class="usa-nav__submenu">
                            <li class="usa-nav__submenu-item">
                                <a href="#" class>Navigation link</a>
                            </li>
                            <li class="usa-nav__submenu-item">
                                <a href="#" class>Navigation link</a>
                            </li>
                            <li class="usa-nav__submenu-item">
                                <a href="#" class>Navigation link</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li class="usa-nav__primary-item">
                        <button
                            class="usa-accordion__button usa-nav__link"
                            aria-expanded="false"
                            aria-controls="basic-nav-section-two"
                        >
                            <span>Section</span>
                        </button>
                        <ul id="basic-nav-section-two" class="usa-nav__submenu">
                            <li class="usa-nav__submenu-item">
                                <a href="#" class>Navigation link</a>
                            </li>
                            <li class="usa-nav__submenu-item">
                                <a href="#" class>Navigation link</a>
                            </li>
                            <li class="usa-nav__submenu-item">
                                <a href="#" class>Navigation link</a>
                            </li>
                        </ul>
                    </li>
                    
                    <li class="usa-nav__primary-item">
                        <a class="usa-nav__link" href="javascript:void(0)">
                            <span>Simple link</span>
                        </a>
                    </li>

                </ul>
                <form class="usa-search usa-search--small" role="search">
                    <label class="usa-sr-only" for="basic-search-field-small">Search small</label>
                    <input
                        class="usa-input"
                        id="basic-search-field-small"
                        type="search"
                        name="search"
                    />
                    <button class="usa-button" type="submit">
                        <span class="usa-sr-only">Search</span>
                    </button>
                </form>
                
            </nav>
            --></div>
        </header>

        <main id="main-content"></main>
    </div>
</template>

<script>
/**
 * USWDS alert component
 * Supports a default slot for the body content, and a 'header' slot for title.
 * @props
 *    variant (string): info, error|danger, success, warning|warn
 *    size (string): normal (default), small|slim
 *    noIcon (bool): false (default), true
 *    title (string):
 */
export default {
    name: 'us-header',
    components: {},
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        fluid: {
            type: String,
            default: 'none'
        }        
    }
};
</script>
<style lang="scss">
@import '../../styles/variables.scss';

// Layer in some styles to help standardize
.usa-nav-container {
    
    &.fluid {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }

    &.fluid-full {
        max-width: 100% !important;
    }

    &.fluid-sm {
        max-width: map-get($grid-breakpoints, 'sm');
    }

    &.fluid-md {
        max-width: map-get($grid-breakpoints, 'md');
    }

    &.fluid-lg {
        max-width: map-get($grid-breakpoints, 'lg');
    }

    &.fluid-xl {
        max-width: map-get($grid-breakpoints, 'xl');
    }
}
</style>
