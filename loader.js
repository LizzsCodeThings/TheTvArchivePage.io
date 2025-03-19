            const roob_video = document.getElementById("theroob")
            const roob_btn = document.getElementById("PlayAnimation")

            roob_btn.onmouseenter = function(){
                roob_btn.style.color = "#85000d";
            }

            roob_btn.onmouseleave = function(){
                roob_btn.style.color = "inherit";
            }
            
            function EpicJumpscare(){
                roob_video.play();
            }
            
            function downloadDataUrlFromJavascript(filename, dataUrl) {
                // https://stackoverflow.com/questions/3916191/download-data-url-file
                // Construct the 'a' element
                var link = document.createElement("a");
                link.download = filename;
                link.target = "_blank";

                // Construct the URI
                link.href = dataUrl;
                document.body.appendChild(link);
                link.click();

                // Cleanup the DOM
                document.body.removeChild(link);
                delete link;
            }

            
            fetch('https://api.github.com/repos/LizzyVarexia/TheTvArchive/contents/content', {
               headers: {
                  'Accept': 'application/json'
               }
            })
            .then(response => response.json())
            .then(videos => {
                for (const video  of videos) {
                    
                    const para = document.createElement("p");
                    const node = document.createTextNode(video.name);
                    para.appendChild(node);
                    
                    para.style.textAlign = "center";
                    para.style.fontFamily = "GothamSSm";
                    para.style.color = "gainsboro";
                    para.style.fontSize = "1.5vw";
                    para.style.cursor = "pointer";
                    
                    para.onclick = function(){
                        downloadDataUrlFromJavascript(video.name,video.download_url);
                    };
                    
                    para.onmouseenter = function(){
                        para.style.textDecoration = "underline";
                    }
                    
                    para.onmouseleave = function(){
                        para.style.textDecoration = "";
                    }
                    
                                   
                    const element = document.getElementById("VideoList");
                    element.appendChild(para);
                }
            })