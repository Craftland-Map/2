const apiBaseUrl = atob('aHR0cHM6Ly9wcm9maWxlLXNhbmQtbXUudmVyY2VsLmFwcC9hcGk/');
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get('uid');
    const region = urlParams.get('region');
    if (uid && region) {
      const iframeSrc = `${apiBaseUrl}?uid=${uid}&region=${region}&key=Another`;
      document.getElementById('apiIframe').src = iframeSrc;
    } else {
      document.getElementById('apiIframe').style.display = 'none';
      const errorMessage = document.createElement('pre');
      errorMessage.textContent = 'Failed to fetch data. Please check your inputs and try again.';
      document.body.appendChild(errorMessage);
    }