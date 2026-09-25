(function(){
function run(){
function wasModalShown() {
            return sessionStorage.getItem('modalShown') === 'true';
        }
        
        function markModalAsShown() {
            sessionStorage.setItem('modalShown', 'true');
        }
        
        function closeModal() {
            document.getElementById('autoPopupModal').classList.remove('show');
            document.body.style.overflow = '';
        }
        
        function showModal() {
            document.getElementById('autoPopupModal').classList.add('show');
            document.body.style.overflow = 'hidden';
        }
        
        document.getElementById('autoPopupModal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
        
        window.addEventListener('load', function() {
            if (!wasModalShown()) {
                setTimeout(function() {
                    showModal();
                    markModalAsShown();
                }, 1000);
            }
        });
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run);
else run();
})();