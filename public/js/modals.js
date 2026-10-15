document.addEventListener('DOMContentLoaded', function () {
    const openButtons = document.querySelectorAll('[data-open]');
    const closeElements = document.querySelectorAll('[data-close]');

    function closeAllModals() {
        document.querySelectorAll('.modal').forEach(function (modal) {
            modal.hidden = true;
        });
    }

    openButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            const target = btn.getAttribute('data-open');
            closeAllModals();
            const modal = document.getElementById('modal-' + target);
            if (modal) modal.hidden = false;
        });
    });

    closeElements.forEach(function (el) {
        el.addEventListener('click', closeAllModals);
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeAllModals();
    });
});