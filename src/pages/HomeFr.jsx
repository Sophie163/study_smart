import React from 'react'; 

function HomeFr() {     
    return (         
      <>
        <html lang="fr"></html>
        <div class="container my-5"></div>
        <div class="container my-3"></div>
        <div style={{ display: 'block', width: '100%', padding: 0 }} class="bg-mygreen pt-3">
            <h1 className='mb-3'>Commencez à <strong>Étudier Intelligemment</strong> avec nos Outils Utiles</h1>
            <img src={require('../assets/group.jpeg')} width="50%"/>
            <p className='mt-3'>
            <button type="gotutors" className="custom-secondary mx-3"><a class="nav-link" href="/study_smart/#/Tutors">Tuteurs</a></button>
            <button type="goplanner" className="custom-secondary mx-3"><a class="nav-link" href="/study_smart/#/Planner">Planificateur</a></button>
            <button type="gotiming" className="custom-secondary mx-3"><a class="nav-link" href="/study_smart/#/Timer">Minuteur</a></button>
            </p>
        </div>

        <h1 className="pt-4 my-2">Découvrez les Avantages D’Étudier Intelligemment</h1>
        <div class="container mb-2 p-4">
            <div class="row">
                <div class="col-sm-4 bg-white m-0 p-0 py-5">
                <img src={require('../assets/tutor.jpg')} width="100%"/>
                </div>
                <div class="col-sm-8 bg-white p-4 text-start">
                    <h2><strong>Tutorat</strong></h2>
                    <p>
                    Les tuteurs peuvent fournir un soutien et des conseils personnalisés qui ne sont pas toujours disponibles dans les salles de classe traditionnelles. Les tuteurs ont la capacité de répondre aux besoins d’apprentissage spécifiques de l’étudiant et d’adapter leurs méthodes d’enseignement pour correspondre au style d’apprentissage unique de chaque étudiant, qu’il s’agisse d’explications supplémentaires, de problèmes pratiques ou d’approches alternatives pour comprendre des concepts complexes. Cette approche personnalisée améliore non seulement la compréhension, mais renforce également la confiance en abordant des domaines de difficulté spécifiques. Dans l’ensemble, la nature personnalisée et solidaire du tutorat favorise une expérience d’apprentissage positive qui permet aux élèves d’exceller sur le plan scolaire.
                    </p>
                    <button type="gotutors" className="custom-primary m-2"><a class="nav-link" href="/study_smart/#/Tutors">Trouvez Votre Tuteur</a></button>
                </div>
            </div>
        </div>
        <div class="container my-2 p-4">
            <div class="row">
                <div class="col-sm-8 bg-white p-4 text-start">
                    <h2><strong>Planification</strong></h2>
                    <p>
                    L’utilisation d’un planificateur pour planifier le temps d’étude aide à promouvoir l’organisation en indiquant clairement quand les devoirs sont dus et quand les examens sont programmés, évitant ainsi le bachotage de dernière minute. Cette méthode encourage également la cohérence dans l’étude, en répartissant efficacement la charge de travail dans le temps plutôt que de submerger les étudiants avec trop de choses à la fois. De plus, la planification des sessions d’étude permet une meilleure gestion du temps, garantissant que les étudiants allouent suffisamment de temps pour chaque matière ou tâche. En fin de compte, l’utilisation d’un planificateur aide les élèves à rester sur la bonne voie, à réduire le stress et à maintenir une approche équilibrée de leurs responsabilités académiques.
                    </p>
                    <button type="goplanner" className="custom-primary m-2"><a class="nav-link" href="/study_smart/#/Planner">Commencez À Planifier</a></button>
                </div>
                <div class="col-sm-4 bg-white m-0 p-0 py-5">
                <img src={require('../assets/planner.jpeg')} width="100%"/>
                </div>
            </div>
        </div>
        <div class="container my-2 p-4">
            <div class="row">
                <div class="col-sm-4 bg-white m-0 p-0 py-5">
                <img src={require('../assets/timer.jpeg')} width="100%"/>
                </div>
                <div class="col-sm-8 bg-white p-4 text-start">
                    <h2><strong>Timing</strong></h2>
                    <p>
                    Les minuteries d’étude sont des outils bénéfiques pour les étudiants car elles favorisent des sessions d’étude ciblées et efficaces. En fixant une limite de temps spécifique pour étudier un sujet ou une tâche particulière, les élèves peuvent rester concentrés et éviter les distractions. Les minuteries d’étude créent un sentiment d’urgence qui aide à rester motivé et productif tout au long de la période d’étude. De plus, les minuteries d’étude décomposent les sessions d’étude en morceaux gérables, évitant ainsi l’épuisement professionnel et améliorant la rétention des informations. En utilisant régulièrement des minuteries d’étude, les étudiants développent une discipline dans la gestion du temps et améliorent leurs habitudes d’étude globales, ce qui conduit à des résultats d’apprentissage plus efficaces.
                    
                    </p>
                    <button type="gotiming" className="custom-primary m-2"><a class="nav-link" href="/study_smart/#/Timer">Atteignez Vos Objectifs</a></button>
                </div>
            </div>
        </div>

        <div style={{ display: 'block', width: '100%', padding: 0 }} class="bg-mygreen my-4">
          <p className='my-4'>
          Vous avez des <strong>questions</strong> ? Nous y avons peut-être déjà répondu !<button type="gosignin" className="custom-secondary mx-4"><a class="nav-link" href="/study_smart/#/FAQ">Aller à la FAQ</a></button>
          </p>
        </div>
        <div class="container my-4"></div>
        </>     
    ); 
} 

export default HomeFr;