const wipe = document.querySelector('.wipe-transition');
const bandes = document.querySelectorAll('.bande');

const TLAnim = new TimelineMax();

function delay(n) {
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n)
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(){

                const done = this.async();
                TLAnim
                .to(bandes, {
                    height: '100%',
                    stagger: 0.08
                })
                // TLAnim.to(wipe, {
                //     left: '0%',
                //     ease: 'power2.out',
                //     duration: 0.5
                // });

                await delay(1500);
                done();
            },
            enter(){

                TLAnim
                .to(bandes, {
                    height: '0%',
                    stagger: 0.08
                })
                .set(wipe, {
                    left:'-100%'
                })
            }
        }
    ]
})