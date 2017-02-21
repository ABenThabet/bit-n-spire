# Remember to set up the environment before invoking this build. 
# source emsdk_set_env.sh 

EMCC_FAST_COMPILER=0 emcc --bind --split 1024000 -s DEMANGLE_SUPPORT=1 -I ../../../vcglib/ open.cpp ../../../vcglib/wrap/ply/plylib.cpp -s TOTAL_MEMORY=268435456  -o open.js
#-s EXPORTED_FUNCTIONS="['_getFileName','_openMesh','_getVertexNumber','_getVertexVector','_getFaceNumber','_getFaceVector']"