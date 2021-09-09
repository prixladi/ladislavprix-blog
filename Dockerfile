FROM shamyr/contentium-base as builder
RUN rm -rf ./data
COPY ./data ./data
RUN yarn export

FROM scratch AS export-builder
COPY --from=builder /app/out ./out