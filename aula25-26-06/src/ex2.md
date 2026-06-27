
### Exercício 2.1

```css
* { box-sizing: border-box; margin: 0; padding: 0; }          /* base */
body { font-family: sans-serif; color: #333; }                 /* base */
:root { --color-primary: #3b82f6; }                            /* base */
.container { max-width: 1200px; margin: 0 auto; }              /* layout */
.site-header { background: var(--color-primary); }             /* layout */
.card { background: white; border-radius: 8px; }               /* card */
.card__titulo { font-size: 1.25rem; }                          /* card */
.text-center { text-align: center; }                           /* utils */
.site-footer { padding: 2rem 0; }                              /* layout */
.button { background: var(--color-primary); color: white; }    /* button */
```